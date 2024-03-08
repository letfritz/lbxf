import { NextRequest, NextResponse } from "next/server";
import sgMail from '@sendgrid/mail';
import { SendEmailRequest } from "@/model/SendEmailRequest";

const SENDER_EMAIL = "ligabrasileiraxadrezfeminino@gmail.com";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req:NextRequest){
    const responseRaw = await req.json();
    const request = responseRaw as SendEmailRequest;
    console.log(`Recebendo requisicao ${request}`)
    await sendEmail(
      `
      <p>Você tem uma nova mensagem:</p>
      <h3>Detalhe do Contato</h3>
      <ul>
        <li><b>Nome:</b> ${request.Name}</li>
        <li><b>E-mail:</b> ${request.Email}</li>
        <li><b>Assunto:</b> ${request.Subject}</li>
        <li><b>Mensagem:</b> ${request.Content}</li>
      </ul>
      `
    );

    return NextResponse.json('OK!')
}

const sendEmail = async (content: string) => {

  console.log(process.env.SENDGRID_API_KEY as string)

  
  const msg = {
    to: SENDER_EMAIL,
    from: SENDER_EMAIL,
    subject: "Contato a partir do site",
    html: content,
  };

  try {
    console.info(`Enviando mensagem ${msg}`)
    const response = await sgMail.send(msg);
    console.log(`Email enviado => ${response}`)
  } catch (error) {
    console.error(error);
  }
};

