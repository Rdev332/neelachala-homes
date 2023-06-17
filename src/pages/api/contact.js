import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
    const prisma = new PrismaClient();

    if (req.method === 'POST') {
        const { name, phone, email, message } = req.body;

        try {
            const contact = await prisma.contact.create({
                data: {
                    name,
                    phone,
                    email,
                    message,
                },
            });

            res.status(200).json({ message: 'Form submitted successfully', contact });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Failed to submit the form' });
        } finally {
            await prisma.$disconnect();
        }
    } else {
        res.status(404).json({ error: 'Not found' });
    }
}
