import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation'
import { headers, cookies } from 'next/headers'

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id

  const headerList = headers()
  const type = headerList.get('Content-Type')

  const cookiesList = cookies()
  const coo1 = cookiesList.get('Cookie_1')?.value

  // logic delete post

  //   redirect('/blog')

  return NextResponse.json({ id, type, coo1 })
}
