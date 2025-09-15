import { NextRequest, NextResponse } from 'next/server';

let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
];

// GET /api/users → return all users
export async function GET(req: NextRequest) {
  return NextResponse.json(users);
}

// POST /api/users → add a new user
export async function POST(req: NextRequest) {
  const body = await req.json();
  const newUser = { id: users.length + 1, ...body };
  users.push(newUser);
  return NextResponse.json(newUser, { status: 201 });
}

// PUT /api/users?id=1 → update user
export async function PUT(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = parseInt(searchParams.get('id') || '0');
  const body = await req.json();

  users = users.map((user) => (user.id === id ? { ...user, ...body } : user));
  return NextResponse.json({ message: 'User updated' });
}

// DELETE /api/users?id=1 → delete user
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = parseInt(searchParams.get('id') || '0');

  users = users.filter((user) => user.id !== id);
  return NextResponse.json({ message: 'User deleted' });
}
