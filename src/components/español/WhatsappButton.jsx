import { FloatingWhatsApp } from 'react-floating-whatsapp'



const WhatsappButton = () => {
    return (
        <FloatingWhatsApp
            phoneNumber='+5491130500025'
            accountName="Fusion"
            statusMessage=""
            chatMessage="¡Hola! ¿Cómo podemos ayudarte?"
            placeholder="Escribe un mensaje..."
            avatar='https://res.cloudinary.com/dpmum6s9p/image/upload/v1686150482/fusionWeb/fusion_logo_ywa5e1.webp'
        />
    )
}

export default WhatsappButton