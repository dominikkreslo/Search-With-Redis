export default function CarForm() {
    const handleSubmit = async (event) => {
        event. preventDefault();

        const form = new FormData(event.target);
        const formData = Object.fromEntries(form.entries());

        const res = await fetch('/api/cars', {
            body: JSON.stringify(formData),
            headers: {
                'Constants-Type': 'application/json',
            },
            method: 'POST',
        });

        const result = await res.json();
        console.log(result);
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input name="make" type="text" placeholder="Make" />
            <input name="model" type="text" placeholder="Model" />
            <input name="image" type="text" placeholder="Image" />
            <input name="description" type="text" placeholder="Description" />

            <button type="submit">Create Car</button>
        </form>
    );
}