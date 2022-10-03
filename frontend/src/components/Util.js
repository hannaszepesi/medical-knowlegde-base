
export const sendDataForServer = async (url, payload, method) => {
    await fetch(url, {
        credentials: 'include',
        method: method,
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(payload)
    });
};

export const handleDelete = async (tableName, id) => {
    // eslint-disable-next-line no-restricted-globals
    let result = confirm("Are you sure you want to delete this?");
    if (result) {
        await sendDataForServer(`/${tableName.replace(" ", "-") + "s"}/delete/${id}`, "", 'DELETE');
        window.location.reload();
    }
}