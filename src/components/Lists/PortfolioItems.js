import {useState} from "react";
import '../../gerais.css'
import {
    Button,
    Card,
    CardBody,
    CardText,
    CardTitle,
    Container,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Col,
    Row
} from "reactstrap";

import topIndian from "../../imagens/topIndian.png";
import planetario from "../../imagens/planetarium.png";
import travel from "../../imagens/travel.png";
import lodo from "../../imagens/lodo.png";
import opposti from "../../imagens/oposti.png";
import sara from "../../imagens/sara.png";
import portfolio from "../../imagens/portfolio.png";

import sara2 from "../../imagens/sara.jpg";
import portfolio2 from "../../imagens/portfolio.jpg";
import planetario2 from "../../imagens/planetarium.jpg";
import travel2 from "../../imagens/travel.jpg";
import lodo2 from "../../imagens/lodo.jpg";
import opposti2 from "../../imagens/oposti.jpg";
import topIndian2 from "../../imagens/topIndian.jpg";



const PortfolioItems  =( {isClicked}) => {


    const works = [
        {
            id: 1,
            title: "Opposti",
            categories: [4],
            description: "The task was to create a high-fidelity prototype in AFFINITY DESIGN for a modern café and ice cream shop, which would extend its traditional in-store experience into the digital realm. Our goal was to design an intuitive and engaging online platform that not only allows customers to order coffee online but also to register for various in-house workshops aimed at coffee enthusiasts and culinary amateurs alike.",
            media: opposti,
            media2: opposti2,
            spects: [
                "Online Ordering: Customers can seamlessly browse the menu and order their favorite coffee and ice cream directly from the website.",
        "Workshop Registration: The platform allows users to register for a variety of in-house workshops, catering to both coffee enthusiasts and culinary amateurs. These workshops provide a hands-on experience to learn more about coffee brewing techniques and ice cream making.",
        "User-Friendly Interface: The design focuses on providing an intuitive user experience, making it easy for customers to navigate the site, place orders, and sign up for workshops.",
            ]
        },
        {
            id: 2,
            title: "Lodo",
            categories: [1],
            description: "This project involved the creation of an online platform for the University of Aveiro’s student-run newspaper, aiming to provide a dynamic and responsive online hub for campus news, events, and academic discussions. The goal was to develop an accessible, easy-to-navigate website that catered specifically to the needs of the university community, leveraging the robust features of HTML and Bootstrap for a responsive design.",
            media: lodo,
            media2: lodo2,
            spects: ["Robust features of HTML and Bootstrap: the platform ensures a seamless and consistent user experience across all devices, from desktops to mobile phones. The responsive design adapts to various screen sizes, making the website easily accessible and navigable for all users",
                "Comprehensive range of features: including news articles, event listings, and academic discussions, all tailored to the interests and needs of the university community. Users can access up-to-date information on campus events, academic programs, and student activities, fostering a sense of community and engagement among students, faculty, and staff."]
        },
        {
            id: 3,
            title: "Travel",
            categories: [1, 3],
            description: "The objective of this project was to develop a comprehensive platform that leverages the power of ReactJS and Reactstrap, combined with various APIs for geolocation, weather updates, and restaurant listings. The platform, aimed at travelers and local adventurers, allows users to register, save their favorite locations, check current weather conditions for these locations, and share their experiences through a blog-like feature.",
            media: travel,
            media2: travel2,
            spects: ["Using Axios Library: The platform leverages geolocation APIs to allow users to find and save their favorite locations. It also integrates weather APIs to provide real-time weather updates for these locations, helping travelers and adventurers plan their trips more effectively.",
                "Firebase autentication and firestore: Users can register and create personalized profiles where they can save their favorite locations, such as restaurants. This feature ensures that users have quick access to their preferred spots and can easily manage their travel plans",
                "Firestore: The platform includes a blog-like feature that allows users to share their travel experiences, recommendations, and tips with other users. This interactive feature fosters a sense of community among travelers and provides valuable insights for planning future trips"]
        },
        {
            id: 4,
            title: "Top Indian Movies",
            categories: [1, 2],
            description: "The project aimed to create a comprehensive movie database platform, similar to IMDb, built with PHP and MySQL. The platform serves as a hub for movie enthusiasts to explore, rate, and discuss films while also allowing them to maintain a personalized list of favorite movies. Additionally, the platform includes administrative capabilities for managing user accounts, movies, and movie genres.",
            media: topIndian,
            media2: topIndian2,
            spects: ["Built using PHP and MySQL: this combination allows the platform to store detailed information about a wide range of movies, including titles, genres, release dates, cast, and crew. Users can search and explore the database to find information about their favorite movies and discover new ones. The PHP scripts handle queries and data retrieval, ensuring efficient access to the movie data",
                "Database request: users can create and manage a personalized list of their favorite movies, and rate them. PHP scripts are used to add or remove movies from a user's favorite list, and these actions are stored in the MySQL database",
                "Different levels of access: the platform includes administrative capabilities for managing user accounts, movies, and movie genres. Administrators can add, edit, or delete movies, genres, and user accounts, ensuring the platform's content remains up-to-date and relevant. The administrative features are secured with user authentication and authorization mechanisms, allowing administrators to perform their tasks securely and efficiently"
            ]
        },
        {
            id: 5,
            title: "Planetarium Pursuit",
            categories: [1, 2],
            description: "The project was commissioned by the Planetário do Porto to create an interactive narrative platform where administrators could craft and publish engaging, story-driven scenarios using a variety of digital assets, such as characters, objects, and backgrounds. This innovative platform was designed to enhance the visitor experience, merging storytelling with educational content in an interactive, game-like environment.",
            media: planetario,
            media2: planetario2,
            spects: ["PHP: used for server-side scripting to manage the platform's core functionalities. It handles the creation, storage, and retrieval of story scenarios, as well as user interactions. PHP scripts process user inputs, manage the database, and generate dynamic content based on user actions. Also facilitates the integration of digital assets into the narrative structure, allowing administrators to seamlessly manage characters, objects, and backgrounds. Also used to create the final game",
            "MySQL: utilized for storing and managing the platform's data. Ensures efficient retrieval of data, supporting the dynamic loading of stories and assets as users interact with the platform.",
            "JavaScript: used in this case only for some of the element such drags and drops, object placement and some front-end functionalities"]
        },
        {
            id: 6,
            title: "SARA",
            categories: [4],
            description: "This project aimed to streamline the process of audiovisual equipment requisition for both students and faculty at a university, as well as simplify inventory management for administrators. Recognizing the complexities involved in managing and requesting AV equipment, the project focused on developing a user-centered digital solution that enhances efficiency and user satisfaction.",
            media: sara,
            media2: sara2,
            spects: ["User-Centered Design: the platform was designed with a focus on user experience, ensuring that students, teachers, and SARA can easily navigate the system and complete their tasks efficiently. The interface is intuitive and user-friendly, allowing users to request equipment, check availability, and approve requests with minimal effort.",
            "Design thinking: the project followed a design thinking approach, starting with user research and prototyping to understand user needs and iteratively improve the platform based on feedback. This iterative process ensured that the final product met the requirements of all stakeholders and provided a seamless experience for users.", "Laravel: the platform was built using the Laravel PHP framework, which provided a robust and secure foundation for the system. Laravel's features, such as authentication, authorization, and database management, were leveraged to create a scalable and efficient platform that meets the needs of a university environment. Laravel also facilitated the integration of third-party APIs for equipment availability, ensuring real-time updates and accurate information"
            ]
        },
        {
            id: 7,
            title: "This Portfolio",
            categories: [3],
            description: "This is my portfolio platform, designed to showcase my skills and the projects I have developed. This platform serves as a comprehensive display of my work, aimed at assisting in my application for a master's program or in my job search. ",
            media: portfolio,
            media2: portfolio2,
            spects: [
                "ReactJS: the platform was built using ReactJS, a JavaScript library for building user interfaces. ReactJS allowed for the creation of a dynamic and interactive portfolio that showcases my skills and projects in an engaging way. The platform's components are reusable and modular, making it easy to update and expand the portfolio as needed.",
                "Bootstrap: bootstrap was used to style the platform, providing a responsive and visually appealing design. Bootstrap's grid system and components ensured that the portfolio is accessible and user-friendly across various devices and screen sizes. The platform's layout and styling were customized to reflect my personal brand and design preferences.",
            ]
        },

    ];


    console.log(isClicked)
    const [modalOpen, setModalOpen] = useState(null);

    const filteredWorks = works.filter((work) => work.categories.includes(isClicked));
    console.log(filteredWorks)
    const toggleModal = (id) => {
        setModalOpen(modalOpen === id ? null : id);
    };





        return (
            <div className='text-white'>
            <Container className='p-0 m-0'>
                <Row className='mt-5'>
                    {filteredWorks.map((work) => (
                        <Col xs={12} md={6} key={work.id} className="mb-4">
                            <Card className="h-100 border-0 rounded-0">
                                <CardBody className='bg-blue'>
                                    <CardText><img src={work.media} alt={work.title} className="img-fluid"/></CardText>
                                    <CardTitle className='h2 text-center text-white text-uppercase fw-bolder pt-2 pb-2'>{work.title}</CardTitle>
                                    <p className='text-center'>
                                    <Button className='bg-transparent colorBlue'  onClick={() => toggleModal(work.id)}>
                                        Read More
                                    </Button>
                                    </p>
                                </CardBody>
                            </Card>

                            <Modal isOpen={modalOpen === work.id} toggle={() => toggleModal(work.id)}
                                   className="modal-md">
                                <ModalHeader toggle={() => toggleModal(work.id)}><p className='h2 fw-bolder m-0 colorBlue' >{work.title}</p></ModalHeader>
                                <ModalBody>
                                    <p>{work.description}</p>
                                        <img src={work.media2} alt={work.title} className="img-fluid"/>
                                    <p className='mt-1 colorBlue h5'>Key Features </p>
                                    <ul>
                                        {work.spects.map((spects, index) => (
                                            <li key={index}>{spects}</li>
                                        ))}
                                    </ul>
                                </ModalBody>
                                <ModalFooter >
                                    <Button color="secondary" onClick={() => toggleModal(work.id)}>Close</Button>
                                </ModalFooter>
                            </Modal>
                        </Col>
                    ))}
                </Row>
            </Container>
            </div>
        );

}
export default PortfolioItems;