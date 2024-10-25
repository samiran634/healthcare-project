import ChatApp from "../../chatbot/cthat-handeler";
import BackgroundContainer from '../background/index';
 
 
const Home = () => {
    const cardData = [
        { title: 'Card 1', content: 'This is the content for Card 1' },
        { title: 'Card 2', content: 'This is the content for Card 2' },
        { title: 'Card 3', content: 'This is the content for Card 3' },
      ];
      
    return (
        <div>
            <BackgroundContainer  props={cardData} />
            <ChatApp />
        </div>
    );
};

export default Home;