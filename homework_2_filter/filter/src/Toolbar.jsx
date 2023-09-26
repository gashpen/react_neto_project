export default function Toolbar({filters, selected, onSelectFilter}){

    return (
        <>
            <button className='button button_all' onClick={onSelectFilter}>All</button>
            <button className='button button_websites' onClick={onSelectFilter}>Websites</button>
            <button className='button button_flayers' onClick={onSelectFilter}>Flayers</button>
            <button className='button button_business' onClick={onSelectFilter}>Business Cards</button>
        </>
    )
} 