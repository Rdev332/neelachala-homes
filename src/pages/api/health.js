export default async function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({ message: 'API is healthy' });
    } else {
        res.status(404).json({ error: 'Not found' });
    }
}