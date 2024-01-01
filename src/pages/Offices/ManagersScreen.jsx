import React, { useState } from 'react';

export default function ManagersScreen() {

    return (
        <section className="offices--section">
            <div className="offices--section-container container">
                <div className="section-title">
                    <h1>Офис</h1>
                </div>
                <div className="offices--lists">
                    <table>
                        <thead>
                            <tr>
                                <th>Имя</th>
                                <th>Должность</th>
                                <th>Телефон</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Ф.И.О</td>
                            <td>Должность</td>
                            <td>Номер телефона</td>
                        </tr>
                        <tr>
                            <td>Бабакулов Далер</td>
                            <td>Заместитель директора по техническим вопросам</td>
                            <td>+998 93 380 33 53</td>
                        </tr>
                        <tr>
                            <td>Усманов Шерзод</td>
                            <td>Начальник отдела</td>
                            <td>+998 99 821 11 21</td>
                        </tr>
                        <tr>
                            <td>Абролов Шоазим</td>
                            <td>Менеджер сервиса</td>
                            <td>+998 99 723 43 94</td>
                        </tr>
                        <tr>
                            <td>Омонов Фарход</td>
                            <td>Начальник отдела</td>
                            <td>+998 90 351 29 29</td>
                        </tr>
                        <tr>
                            <td>Хакимов Қахрамон</td>
                            <td>Начальник отдела</td>
                            <td>+998 97 727 86 87</td>
                        </tr>
                        <tr>
                            <td>Аскаров Ботир</td>
                            <td>Менеджер сервиса</td>
                            <td>+998 90 041 44 92</td>
                        </tr>
                        <tr>
                            <td>Арифходжаев Сардор</td>
                            <td>Начальник отдела</td>
                            <td>+998 93 069 17 91</td>
                        </tr>
                        <tr>
                            <td>Абдухаликов Қахрамон</td>
                            <td>Начальник отдела</td>
                            <td>+998 97 003 48 48</td>
                        </tr>
                        <tr>
                            <td>Давлатходжаев Рустам</td>
                            <td>Зам. директор</td>
                            <td>+998 99 805 32 35</td>
                        </tr>
                        <tr>
                            <td>Ботиров Бекзод</td>
                            <td>Начальник отдела</td>
                            <td>+998 97 724 47 49</td>
                        </tr>
                        <tr>
                            <td>Миргазиев Алишер</td>
                            <td>Сервис менеджер</td>
                            <td>+998 99 841 00 04</td>
                        </tr>
                        <tr>
                            <td>Тургунов Рустам</td>
                            <td>Зам. директор</td>
                            <td>+998 94 676 40 76</td>
                        </tr>
                        <tr>
                            <td>Тургунбоев Достон</td>
                            <td>Сервис Менеджер</td>
                            <td>+998 88 700 37 66</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
