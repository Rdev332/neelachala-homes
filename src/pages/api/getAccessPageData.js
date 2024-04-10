
// This function is used to get all projects from the CMS
export default async function getHomePageData() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/access?populate[access_projects][populate]=*&populate[header_image][populate]=*`, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `bearer ${process.env.NEXT_PUBLIC_CMS_API_TOKEN}`,
            },
        });
        if (response.status) {
            const data = await response.json();
            return data;
        }
    }
    catch (error) {
        console.log(error);
        return []
    }
}