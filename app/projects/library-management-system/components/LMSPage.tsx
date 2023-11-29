const LMSPage = () => {
    return (
        <h1 className="text-lg md:text-xl mt-[50px]">
            {"I created this library management system to keep track of all of your books! You enter the book's information, such as ISBN, author, publication date, etc and it stores the information in a database for you to retrieve later."}
            <br></br>
            <br></br>
            {"This project was my first major project using HTML, JavaScript, CSS, React, Node.js, and PostgreSQL so it may not look the best at the moment but I have plans to refurbish it in the future."}
            {" The backend is created with Node.js, allowing POST and GET requests to store and retrieve a plethora of information in the PostgreSQL database. "}
            {" After adding a book, the program seamlessly updates the author category, ensuring that the book is appropriately attributed to the author. This enables easy retrieval of all books authored by a specific writer."}
        </h1>
    );
};

export default LMSPage;