const callback = (): number => {
    alert("hey")
    return 12;
}
window.setTimeout(callback, 1000)

export const User = () => {

    const deleteUser = () => {
        alert("user was deleted")
    }

    const saveUser = () => {
        alert("user was saved")
    }

    return <div>Vlad
        <button onClick={deleteUser}>delete</button>
        <button onClick={saveUser}>save</button>
    </div>
}