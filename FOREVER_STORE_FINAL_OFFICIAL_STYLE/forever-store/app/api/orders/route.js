import { NextResponse } from 'next/server';

function validText(value, min = 2, max = 300) {
  return typeof value === 'string' && value.trim().length >= min && value.trim().length <= max;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const customer = body?.customer || {};
    const items = Array.isArray(body?.items) ? body.items : [];

    if (
      !validText(customer.name) ||
      !validText(customer.phone, 6, 30) ||
      !validText(customer.city) ||
      !validText(customer.address, 4, 400) ||
      !items.length
    ) {
      return NextResponse.json({ error: 'Invalid order data' }, { status: 400 });
    }

    const orderNumber = `FL-${Date.now().toString(36).toUpperCase()}`;
    const order = {
      orderNumber,
      createdAt: new Date().toISOString(),
      locale: body.locale === 'ar' ? 'ar' : 'fr',
      customer: {
        name: customer.name.trim(),
        phone: customer.phone.trim(),
        city: customer.city.trim(),
        address: customer.address.trim(),
        note: typeof customer.note === 'string' ? customer.note.trim().slice(0, 500) : ''
      },
      paymentMethod: 'COD',
      items,
      total: Number(body.total || 0)
    };

    const webhook = process.env.ORDER_WEBHOOK_URL;
    if (webhook) {
      const response = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order),
        cache: 'no-store'
      });

      if (!response.ok) {
        return NextResponse.json({ error: 'Order webhook failed' }, { status: 502 });
      }
    } else {
      console.log('FOREVER_ORDER', JSON.stringify(order));
    }

    return NextResponse.json({ ok: true, orderNumber });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
