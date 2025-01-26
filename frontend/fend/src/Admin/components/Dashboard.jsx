import React, { useState, useEffect } from 'react';
import AdminLayout from "../../layouts/AdminLayout";
import Domain from '../../Api/Api';
import { AuthToken } from '../../Api/Api';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faComments, faHeart, faEye, faUser, faFolder } from "@fortawesome/free-solid-svg-icons";
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import Loading from '../../layouts/Loading';
import Swal from 'sweetalert2';

/* AnalyticsCard Component */
const AnalyticsCard = ({ title, value, icon }) => (
  <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
    <FontAwesomeIcon icon={icon} className="text-4xl text-indigo-500" />
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  </div>
);

/* Analytics Component */
const Analytics = ({ Visits, Posts, Comments }) => {
  const orderedMonths = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const mapDataToMonths = (data, field) => {
    const counts = new Array(12).fill(0);
    data.forEach(item => {
      const monthIndex = orderedMonths.indexOf(item.month);
      if (monthIndex !== -1) {
        counts[monthIndex] = item[field];
      }
    });
    return counts;
  };

  const visitCounts = mapDataToMonths(Visits, 'visit_count');
  const postCounts = mapDataToMonths(Posts, 'post_count');
  const commentCounts = mapDataToMonths(Comments, 'comment_count');

  const chartOptions = {
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true, grid: { borderDash: [5, 5] } },
    },
  };

  const createChartData = (label, data, color) => ({
    labels: orderedMonths,
    datasets: [
      {
        label,
        data,
        borderColor: color,
        borderWidth: 2,
        fill: false,
      },
    ],
  });

  return (
    <>
      <div className="bg-white rounded-lg shadow-md my-5 p-4">
        <h2 className="text-2xl font-semibold mb-4">Visits</h2>
        <Line data={createChartData('Monthly Visits', visitCounts, 'rgba(255, 159, 64, 1)')} options={chartOptions} />
      </div>
      <div className="bg-white rounded-lg shadow-md my-5 p-4">
        <h2 className="text-2xl font-semibold mb-4">Posts</h2>
        <Line data={createChartData('Monthly Posts', postCounts, 'rgba(54, 162, 235, 1)')} options={chartOptions} />
      </div>
      <div className="bg-white rounded-lg shadow-md my-5 p-4">
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        <Line data={createChartData('Monthly Comments', commentCounts, 'rgba(75, 192, 192, 1)')} options={chartOptions} />
      </div>
    </>
  );
};

/* Dashboard Component */
const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    TotalPosts: 0,
    TotalComment: 0,
    TotalLikes: 0,
    TotalVisits: 0,
    TotalCategories: 0,
    TotalUsers: 0,
    MonthlyVisits: [],
    MonthlyPosts: [],
    MonthlyComments: [],
  });

  useEffect(() => {
    axios
      .get(`${Domain()}/Dashboard`, {
        headers: { Authorization: `Bearer ${AuthToken()}` },
      })
      .then(response => setDashboardData(response.data))
      .catch(error => {
        console.error('Error fetching dashboard data:', error);
        Swal.fire('Error', 'Failed to load dashboard data. Please try again.', 'error');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <AdminLayout>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container mx-auto mt-8 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnalyticsCard title="Total Posts" value={dashboardData.TotalPosts} icon={faFileAlt} />
            <AnalyticsCard title="Total Comments" value={dashboardData.TotalComment} icon={faComments} />
            <AnalyticsCard title="Likes Received" value={dashboardData.TotalLikes} icon={faHeart} />
            <AnalyticsCard title="Total Visits" value={dashboardData.TotalVisits} icon={faEye} />
            <AnalyticsCard title="Total Categories" value={dashboardData.TotalCategories} icon={faFolder} />
            <AnalyticsCard title="Total Users" value={dashboardData.TotalUsers} icon={faUser} />
          </div>
          <Analytics
            Visits={dashboardData.MonthlyVisits}
            Posts={dashboardData.MonthlyPosts}
            Comments={dashboardData.MonthlyComments}
          />
        </div>
      )}
    </AdminLayout>
  );
};

export default Dashboard;
