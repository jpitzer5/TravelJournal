import Entry from "./components/Entry"
import Header from "./components/Header"
import data from "./data"

export default function App() {

    const entries = data.map((entry) =>
        <Entry 
          key={entry.id}
          entry={entry}
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