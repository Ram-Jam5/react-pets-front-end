const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;



const index = async () => {
   try { 
    const res = await fetch(BASE_URL);
    return res.json();
} catch (err) {
    console.log(err)
}
};

const create = async (formData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        });
        return res.json();
    } catch (error) {
        console.log(error)
    }
}

const updatePet = async (formData, petId) => {
    try {
        const res = await fetch(`${BASE_URL}/${petId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        return res.json()
    } catch (e) {
        console.log(e)
    }
}

const deletePet = async (petId) => {
    try {
        const deletedPet = await fetch(`${BASE_URL}/${petId}`, {
            method: 'DELETE',
        });
        return deletedPet.json();
    } catch (err) {
        console.log(err)
    }
}


export { index, create, updatePet, deletePet };