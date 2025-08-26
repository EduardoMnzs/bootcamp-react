import NewsCard from './NewsCard';
import tec_unimar from '../assets/images/noticias/tec_unimar.jpg';
import unimar_tech_summit from '../assets/images/noticias/unimar_tech_summit.jpg';

const news = [
    {
        image: unimar_tech_summit,
        altText: "Unimar Tech Summit",
        title: "Unimar Tech Summit",
        description: "Participe do maior encontro de tecnologia e inovação do interior paulista.",
        link: "https://lets.4.events/unimar-tech-summit-2025-C11575E131"
    },
    {
        image: tec_unimar,
        altText: "Parque Tecnológico TecUnimar",
        title: "TecUnimar: Parque Tecnológico",
        description: "A Unimar inaugura o primeiro Parque Tecnológico da região.",
        link: "https://tec.unimar.br/"
    }
];

function NewsSection() {
    return (
        <section id="noticias">
            <h2>Últimas Notícias</h2>
            <div className="cards">
                {news.map((item) => (
                    <NewsCard
                        key={item.title}
                        image={item.image}
                        altText={item.altText}
                        title={item.title}
                        description={item.description}
                        link={item.link}
                    />
                ))}
            </div>
        </section>
    );
}

export default NewsSection;