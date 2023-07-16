import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
    auth: { persistSession: false, }
})

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, phone, email, message } = req.body;

        try {
            const { status, error } = await supabase.from('contact').insert({
                name,
                phone,
                email,
                message,
            });

            if (error) {
                throw error;
            }

            if (status === 201) {
                res.status(200).json({ message: 'Form submitted successfully' });
            } else {
                res.status(500).json({ error: 'Failed to submit the form' });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Failed to submit the form' });
        }
    } else {
        res.status(404).json({ error: 'Not found' });
    }
}