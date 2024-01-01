
export default function TechnologyScreen() {

    return (
        <section className="offices--section">
            <div className="offices--section-container container">
                <div className="section-title">
                    <h1>Дополнительные номера</h1>
                </div>
                <div className="offices--lists">
                    <table>
                        <thead>
                            <tr>
                                <th>Ф.И.О</th>
                                <th>Должность</th>
                                <th>Телефон</th>
                                <th>Время работы</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colSpan={4}>По лифтам и эскалаторам</th>
                            </tr>
                            <tr>
                                <td>Кударов Шодиёр</td>
                                <td>Менеджер по сервису</td>
                                <td>+998 (99) 830 19 66</td>
                                <td>Пон. Суб. 09:00 - 18:00 </td>
                            </tr>
                            <tr>
                                <th colSpan={4}>По газовам счётчикам</th>
                            </tr>
                            <tr>
                                <td>Юлдашев Расул</td>
                                <td>Главный технолог</td>
                                <td>+998 (97) 722 54 00</td>
                                <td>Пон. Суб. 09:00 - 18:00 </td>
                            </tr>
                            <tr>
                                <th colSpan={4}>По бытовым насосам</th>
                            </tr>
                            <tr>
                                <td>Отаев Дадабек</td>
                                <td>Менеджер по сервису</td>
                                <td>+998 (90) 033 16 13</td>
                                <td>Пон. Суб. 09:00 - 18:00 </td>
                            </tr>
                            <tr>
                                <td>Ниғматов Мурод</td>
                                <td>Менеджер по сервису</td>
                                <td>+998 (94) 645 65 31</td>
                                <td>Пон. Суб. 09:00 - 18:00 </td>
                            </tr>
                            <tr>
                                <th colSpan={4}>По промышленных кондиционеров</th>
                            </tr>
                            <tr>
                                <td>Иномов Аслиддин</td>
                                <td>Менеджер по сервису</td>
                                <td>+998 (99) 637 59 12</td>
                                <td>Пон. Суб. 09:00 - 18:00 </td>
                            </tr>
                            <tr>
                                <th colSpan={4}>По промышленных котлов</th>
                            </tr>
                            <tr>
                                <td>Мирахмадов Сарвар</td>
                                <td>Менеджер по сервису</td>
                                <td>+998 (90) 397 33 31</td>
                                <td>Пон. Суб. 09:00 - 18:00 </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
