
// This function is used to get all projects from the CMS
export default async function getHomePageData() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/home-page?populate[promotionPopup][populate]=*&populate[header_video][populate]=*&populate[header][populate]=*&populate[testimonials][populate]=*&populate[banner][populate]=*&populate[header_thumbnail][populate]=*`, {
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