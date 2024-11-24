import { userData } from "../../data/dummyData";
import {
 LineChart,
 Line,
 XAxis,
 CartesianGrid,
 Tooltip,
 ResponsiveContainer,
} from "recharts";
function Chart() {
 return (
 <div className="chart">
    <h3 className="chartTitle"> User Analytics </h3>
    <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={userData}>
            <XAxis dataKey="name" stroke="#5550bd" />
            <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
            <Tooltip />
            <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
    </ResponsiveContainer>
 </div>
 );
}
export default Chart; 