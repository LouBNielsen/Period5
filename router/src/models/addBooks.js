import React from "react";

const addBooks = () => (

    <div>
        <h2>Add books</h2>
        <br />
        <table>
            <td><b>Id: <input type="text" name="id" /></b></td>
            <td><b>Title: <input type="text" name="title" /></b></td>
            <td><b>Info: <input type="text" name="info" /></b></td>
            <td><b>More info: <input type="text" name="moreInfo" /></b></td>
        </table>
        <br/>
        <button>Add book</button>

    </div>

)

export default addBooks;