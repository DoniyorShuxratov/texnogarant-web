import React, { useState } from 'react';
import data from '../../data/offices.json';

export default function OfficesScreen() {
    const [openListIndex, setOpenListIndex] = useState(null);

    const handleListToggle = (index) => {
        setOpenListIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className="offices--section">
            <div className="offices--section-container container">
                <div className="section-title">
                    <h1>наш офис</h1>
                </div>
                <div className="offices--lists">
                    {data?.offices?.map((item, i) => (
                        <div key={i} className="offices--list">
                            <div
                                id={`listOpenBtn_${i}`}
                                className="office--list-top"
                                onClick={() => handleListToggle(i)}
                            >
                                <h5>{item.holder}</h5>
                                <span>{openListIndex === i ? '-' : '+'}</span>
                            </div>
                            <div className={`bottom-list ${openListIndex === i ? 'anim-open' : ''}`}>
                                <div
                                    id={`listBottomList_${i}`}
                                    className={'office--list-bottom'}
                                >
                                    <div className="list--bottom-grid grid-1">
                                        <p>Email:</p>
                                        <p>{item.details.email}</p>
                                    </div>
                                    <div className="list--bottom-grid grid-2">
                                        <p>Должность:</p>
                                        <p>{item.details.position}</p>
                                    </div>
                                    <div className="list--bottom-grid grid-3">
                                        <p>Имя:</p>
                                        <p>{item.details.name}</p>
                                    </div>
                                </div>
                            </div>
                                
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
