export const chartsData = {
    labels: ['Severity 1', 'Severity 2', 'Severity 3', 'Severity 4', 'Severity 5'],
    datasets: [
        {
            label: 'PRB severity',
            data: [65, 59, 80, 81, 56],
            backgroundColor: 'rgba(125, 162, 255, 0.9)',
            borderColor: 'rgba(54, 162, 235, 0.2)',
        }
    ]
}

export const chartsOption = {
    title: {
        display: true,
        text: 'Severity',
        fontSize: 16
    },
    legend: {
        position: 'bottom'
    },
};

export const pieChartsData = {
    labels: [],
    datasets: [
        {
            data: [3000,1000, 2000],            
            backgroundColor:  [ "#6544a9", "#51cc00", "#5d4361"]
        }
    ]
}

export const pieChartOPtion = {
    title: {
        display: true,
        text: 'Technology Chart',
        fontSize: 16
    },
    legend: {
        position: 'bottom'
    },
};
     
