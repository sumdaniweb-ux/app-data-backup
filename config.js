/**
 * Chart Initialization Configurations
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Revenue Line Chart Initialization
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    
    const revenueGradient = revenueCtx.createLinearGradient(0, 0, 0, 300);
    revenueGradient.addColorStop(0, 'rgba(99, 102, 241, 0.35)');
    revenueGradient.addColorStop(1, 'rgba(99, 102, 241, 0.0)');

    new Chart(revenueCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            datasets: [{
                label: 'Revenue ($)',
                data: [12000, 19000, 15000, 22000, 30000, 28000, 35000, 42000, 39000, 48000],
                borderColor: '#6366f1',
                borderWidth: 2,
                fill: true,
                backgroundColor: revenueGradient,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { color: '#94a3b8', font: { family: 'Inter', size: 11 } }
                },
                y: {
                    grid: { color: 'rgba(51, 65, 85, 0.5)' },
                    ticks: { color: '#94a3b8', font: { family: 'Inter', size: 11 } }
                }
            }
        }
    });

    // 2. Traffic Doughnut Chart Initialization
    const trafficCtx = document.getElementById('trafficChart').getContext('2d');
    new Chart(trafficCtx, {
        type: 'doughnut',
        data: {
            labels: ['Direct', 'Organic', 'Referral'],
            datasets: [{
                data: [40, 35, 25],
                backgroundColor: ['#6366f1', '#06b6d4', '#10b981'],
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '75%',
            plugins: {
                legend: { display: false }
            }
        }
    });
});