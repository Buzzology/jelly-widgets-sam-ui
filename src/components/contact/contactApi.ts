
interface IContactProps {
    email: string;
    message: string;
    subscribe: boolean;
}


export async function Contact(request: IContactProps): Promise<boolean> {
    try {
        const resp = await fetch(`${process.env.REACT_APP_BASE_API_URL}/contact`, {
            method: 'POST',
            // headers: headers,
            body: JSON.stringify(request),
        });

        if (resp.ok) {
            return true
        } else {
            throw new Error(resp.statusText);
        }
    } catch (e) {
        console.error(e);
        throw e;
    }
}