import Entry from "./components/Entry"
import Header from "./components/Header"
import data from "./data"

export default function App() {

    const entries = data.map((entry) =>
        <Entry 
          key={entry.id}
          img={entry.img}
          title={data.title}
          country={entry.country}
          googleMapsLink={entry.googleMapsLink}
          dates={entry.dates}
          text={entry.text}
        />
    )
    
    return (
        <>
            <Header />
            <main className="container">
              {entries}
            </main>
        </>
    )
}