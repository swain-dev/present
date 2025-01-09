import { useState, useTransition } from "react";

function TransitionHook() {
    const [isPending, startTransition] = useTransition();
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);

    const fetchItems = () => {
        console.log('fetch ....');
        return new Promise((resolve) => {
          setTimeout(() => {
            const items = Array.from({ length: 1000 }, (_, index) => index);
            resolve(items);
          }, 5000);
        });
    };

      
    const fetchData = async () => {
        startTransition(async () => {
            const items = await fetchItems();
            setItems(items)
        });
        // setCount(prev => prev + 1);
    
        // const items = await fetchItems();
        setCount(prev => prev + 1);
        setItems(prev => [...prev, ...items])
    };

    return (
        <div className="box">
            <div className='title box_title'>Transition Hook</div>
            <div className="box_content">
                <div className="transition_main">
                    <div>
                        Count: {count}
                    </div>
                    {isPending && <div>Đang tải dữ liệu...</div>}
                    <ul>
                        {items.map((item, index) => (
                        <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <button onClick={fetchData}>Tải dữ liệu</button>
                </div>
            </div>
           
        </div>
    );
}

export default TransitionHook;
