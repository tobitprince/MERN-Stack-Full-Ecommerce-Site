import React, { useState,} from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function MonthlySalesChart({ data }) {
    const [xValues, setXValues] = useState([])

    const formatDate = (date) => {
        if (xValues.includes(date.getMonth())) {
            setXValues([...xValues, date.getMonth()])
            
        } return ''
    }
    return (
        <ResponsiveContainer width="90%" height={600}>
            <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>


    );
}