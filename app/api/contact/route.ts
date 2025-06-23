import { type NextRequest, NextResponse } from "next/server"
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contacto Portfolio <onboarding@resend.dev>',
      to: ['joelsosayaquispe@gmail.com'],
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
            Nuevo mensaje de contacto
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Información del contacto:</h3>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Mensaje:</h3>
            <p style="line-height: 1.6; color: #555;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e7f3ff; border-radius: 8px;">
            <p style="margin: 0; color: #0066cc; font-size: 14px;">
              <strong>Nota:</strong> Puedes responder directamente a este email para contactar con ${name}.
            </p>
          </div>
        </div>
      `,
      replyTo: email,
    })

    if (error) {
      console.error('Error sending email:', error)
      return NextResponse.json(
        { error: 'Error al enviar el email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email enviado correctamente', id: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error in send-email API:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
