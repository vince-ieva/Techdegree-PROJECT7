//CREATE ALERT
const alert = document.getElementById("alert");
// create the html for the banner
alert.innerHTML ='<div class="alert-banner"><p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p><a class="alert-banner-close">x</a></div>'

alert.addEventListener('click', e => {
const element = e.target;
if (element.classList.contains("alert-banner-close")) {
alert.style.display = "none"
		}});



//CHART WIDGETS

var trafficCanvas=document.getElementById("traffic-chart")
let trafficData = {
labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3","4-10", "11-17", "18-24", "25-31"],
datasets: [{
		data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,2500],
		backgroundColor: 'rgba(116, 119, 191, .3)',
		borderWidth: 1,

		}]
};


let trafficOptions = {  maintainAspectRatio: false,
						aspectRatio: 2.8,
						animation: {
						duration: 0
						},
						scales: {
							yAxes: [{
								ticks: {
									beginAtZero:true
										}
									}]
							},
						legend : {
						display: false
						},
						 layout: {
            padding: {
               top: 10,
               right: 10,
               bottom: 10,
               left: 10
            }
         }
					};


let trafficChart = new Chart(trafficCanvas, {
				type: 'line',
				data: trafficData,
				options: trafficOptions
});



//BAR GRAPH
const dailyCanvas = document.getElementById("daily-chart");
// data for daily traffic bar chart
const dailyData = {
			labels: ["S", "M", "T", "W", "T", "F", "S"],
			datasets: [{
					label: '# of Hits',
					data: [75, 115, 175, 125, 225, 200, 100],
					backgroundColor: '#7477BF',
					borderWidth: 1
					}]
			};
const dailyOptions = {
					scales: {
					yAxes: [{
					ticks: {
					beginAtZero:true
					}
					}]
					},
					legend : {
					display: false
					}
				}

let dailyChart = new Chart(dailyCanvas, {
								type: 'bar',
								data: dailyData,
								options: dailyOptions
								});

//DONUTS GRAPH

const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
					labels: ["Desktop", "Tablet", "Phones"],
					datasets: [{
					label: '# of Users',
					data: [2000, 550, 500],
					borderWidth: 0,
					backgroundColor: [
					'#7477BF',
					'#78CF82',
					'#51B6C8'
					]
					}]
};

const mobileOptions = {
	legend: {
				position: 'right',
				labels: {
				boxWidth: 20,
				fontStyle: 'bold'
			}
		}
	}

let mobileChart = new Chart(mobileCanvas, {
					type: 'doughnut',
					data: mobileData,
					options: mobileOptions
					});


//Messaging Section
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");
const closeSend= document.getElementById("send-btn-close");

//LISTENER BEFORE SENDING

send.addEventListener('click', function(){
// ensure user and message fields are filled out
if (user.value === "" && message.value === "") {
window.alert("Please fill out user and message fields before sending");
} else if (user.value === "" ) {
window.alert("Please fill out user field before sending");
} else if (message.value === "" ) {
window.alert("Please fill out message field before sending");
} else {event.preventDefault();
	document.getElementById("confirm-box").style.display = "block";
  message.value="";
  user.value="";
;
}})


closeSend.addEventListener('click', function(){
      document.getElementById("confirm-box").style.display = "none";
   })

//BELL NOTIFICATIONS

var jingleBells =document.getElementById("AlertBell")

jingleBells.addEventListener('click', function(){
 
      // =-=-=-=-=-= HIDE MSG DOT - SHOW NOTIFICATION POPUP =-=-=-=
      document.getElementById("msg-dot").style.display = "none";
      document.getElementById("notifications").style.display = "block";
   })

var menuclick= document.getElementsByClassName("menu")

for (let i=0;i<menuclick.length;i++){
	menuclick[i].addEventListener('click',  function(){ document.getElementById("notifications").style.display = "none";})
}
