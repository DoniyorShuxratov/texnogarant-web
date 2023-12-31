import React, { useState } from 'react';

export default function ExtraNumbersScreen() {

    return (
        <section className="offices--section">
            <div className="offices--section-container container">
                <div className="section-title">
                    <h1>наш офис</h1>
                </div>
                <div className="offices--lists">
                    <table>
                        <thead>
                            <tr>
                                <th>Офис</th>
                                <th>Должность</th>
                                <th>Телефон</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>Axmadaliyev Zohid</td>
                                <td>Директор сервис центра</td>
                                <td>+998 33 244 40 41</td>
                            </tr>
                            <tr>
                                <td>Axmadaliyev Zohid</td>
                                <td>Директор сервис центра</td>
                                <td>+998 33 244 40 41</td>
                            </tr>
                            <tr>
                                <td>Axmadaliyev Zohid</td>
                                <td>Директор сервис центра</td>
                                <td>+998 33 244 40 41</td>
                            </tr>
                            <tr>
                                <td>Artikjonov Zikirillo Rovshan o'gli</td>
                                <td>Заместитель директора по финансам и снабжению</td>
                                <td>+998 90 959 51 11</td>
                            </tr>
                            <tr>
                                <td>Usmonov Fayoziddin Xusniddin o'g'li</td>
                                <td>Финансист</td>
                                <td>+998 90 092 20 40</td>
                            </tr>
                            <tr>
                                <td>Zakirxo'jayev Saidazim Farruxxo'ja o'gli</td>
                                <td>Финансист</td>
                                <td>+998 90 923 25 70</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
