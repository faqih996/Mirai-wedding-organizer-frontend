import { TShow } from './types.d';
export default async function getData(show: TShow) {
    // Get the data from the Settings component and the Settings component itself and return it as a string array with the data properties asynchronously
    try {
        // Set the base URL for the API endpoint
        let url = `${process.env.HOST_API}/api/wedding-packages`;

        // Modify the URL if the show parameter is "popular"
        if (show === "popular") {
            url = `${process.env.HOST_API}/api/wedding-packages/popular`;
        }

        // Fetch the data from the API
            const res = await fetch(url, {
            method: "GET",
            cache: "no-cache",
        });

        console.log(url, res);
        return res.json();

    } catch (error) {
        console.error( error);
        
        throw error; // or return {}; if you prefer not to throw the error
    }
}

// export default getData;
