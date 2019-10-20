var modal = document.getElementById("modal_background")

var map_dict = {
	"Al_Basrah_AAS_v1": {"Team_1": {"Name": "USA","Tickets": 250,"Vehicles": [{"Name": "M1126 M2HB APC", "Amount": 2, "Delay": ""},{"Name": "M2A3 IFV", "Amount": 1, "Delay": ""},{"Name": "M-ATV M2HB", "Amount": 2, "Delay": ""},{"Name": "M939 Transport Truck", "Amount": 1, "Delay": "06:00"},{"Name": "M939 Logistics Truck", "Amount": 3, "Delay": ""}]},"Team_2": {"Name": "INS","Tickets": 250,"Vehicles": [{"Name": "T-62 MBT", "Amount": 1, "Delay": "30:00"},{"Name": "BRDM-2 Spandrel", "Amount": 1, "Delay": "30:00"},{"Name": "BMP-1 ZU-23 Anti Air APC", "Amount": 1, "Delay": ""},{"Name": "Logistics Technical", "Amount": 4, "Delay": ""},{"Name": "Armored Technical DshK", "Amount": 2, "Delay": ""},{"Name": "Technical DshK", "Amount": 2, "Delay": ""},{"Name": "Armored Technical SPG-9", "Amount": 1, "Delay": ""},{"Name": "Transport Technical", "Amount": 1, "Delay": "06:00"},{"Name": "ZU-23 Anti-Air Truck", "Amount": 1, "Delay": ""},{"Name": "Minsk Motorcycle", "Amount": 4, "Delay": ""}]}}
}

function view_vehicles (map)
{
	var body = document.getElementsByTagName("BODY")[0];
	body.style.overflow = "hidden";

	var team_1_ul = document.getElementById("team_1_vehicles");
	var team_2_ul = document.getElementById("team_2_vehicles");

	document.getElementById("layer_name").innerHTML = map.replace(/_/g, " "); // Displays the map name on top of the modal

	document.getElementById("team_1_name").innerHTML = map_dict[map]["Team_1"]["Name"];
	document.getElementById("team_2_name").innerHTML = map_dict[map]["Team_2"]["Name"];

	document.getElementById("team_1_tickets").innerHTML = map_dict[map]["Team_1"]["Tickets"] + " Tickets";
	document.getElementById("team_2_tickets").innerHTML = map_dict[map]["Team_2"]["Tickets"] + " Tickets";

	switch (map_dict[map]["Team_1"]["Name"])
	{
		case "CA": document.getElementById("team_1_flag").src = "img/flag_CA.png"; break;
		case "GB": document.getElementById("team_1_flag").src = "img/flag_GB.png"; break;
		case "INS": document.getElementById("team_1_flag").src = "img/flag_INS.png"; break;
		case "MIL": document.getElementById("team_1_flag").src = "img/flag_MIL.png"; break;
		case "RUS": document.getElementById("team_1_flag").src = "img/flag_RUS.png"; break;
		case "USA": document.getElementById("team_1_flag").src = "img/flag_USA.png"; break;
		default: document.getElementById("team_1_flag").src = "img/flag_USA.png"; break;
	}

	switch (map_dict[map]["Team_2"]["Name"])
	{
		case "CA": document.getElementById("team_2_flag").src = "img/flag_CA.png"; break;
		case "GB": document.getElementById("team_2_flag").src = "img/flag_GB.png"; break;
		case "INS": document.getElementById("team_2_flag").src = "img/flag_INS.png"; break;
		case "MIL": document.getElementById("team_2_flag").src = "img/flag_MIL.png"; break;
		case "RUS": document.getElementById("team_2_flag").src = "img/flag_RUS.png"; break;
		case "USA": document.getElementById("team_2_flag").src = "img/flag_USA.png"; break;
		default: document.getElementById("team_2_flag").src = "img/flag_USA.png"; break;
	}

	map_dict[map]["Team_1"]["Vehicles"].forEach(element =>
	{
		var li = document.createElement("li");

		var vehicle_amount = document.createElement("p");
		vehicle_amount.innerHTML = element["Amount"];

		var vehicle_name = document.createElement("h6");
		vehicle_name.innerHTML = element["Name"];

		var vehicle_delay = document.createElement("small");
		vehicle_delay.innerHTML = element["Delay"];

		var vehicle_img = document.createElement("img");
		switch (element["Name"])
		{
			case "BMP-1 ZU-23 Anti Air APC":
			case "MT-LB ZU-23 Anti Air APC":
				vehicle_img.src = "img/map_antiair.png";
				break;
			case "BTR-80 APC":
			case "M1126 M2HB APC":
			case "M1126 M240 APC":
				vehicle_img.src = "img/map_apc.png";
				break;
			case "BTR-82A IFV":
				vehicle_img.src = "img/map_ifv.png";
				break;
			case "M-ATV M2HB":
			case "BRDM-2 Scout Car":
			case "Technical DshK":
			case "Armored Technical DshK":
				vehicle_img.src = "img/map_jeep.png";
				break;
			case "Armored Technical SPG-9":
			case "Technical SPG-9":
			case "M-ATV TOW":
			case "BRDM-2 Spandrel":
				vehicle_img.src = "img/map_jeep_antitank.png";
				break;
			case "Technical UB-32 Rocket Artillery":
				vehicle_img.src = "img/map_jeep_artillery.png";
				break;
			case "Logistics Technical":
				vehicle_img.src = "img/map_jeep_logistics.png";
				break;
			case "Transport Technical":
				vehicle_img.src = "img/map_jeep_transport.png";
				break;
			case "M-ATV M2HB CROWS":
			case "M-ATV M240 CROWS":
				vehicle_img.src = "img/map_jeep_turret.png";
				break;
			case "Minsk Motorcycle":
				vehicle_img.src = "img/map_motorcycle.png";
				break;
			case "M1A2 MBT":
			case "T-62 MBT":
			case "T-72B3 MBT":
			case "FV4034 MBT":
				vehicle_img.src = "img/map_tank.png";
				break;
			case "FV432 APC":
			case "MT-LB VMK APC":
			case "MT-LB APC":
			case "MT-LBM 6MA IFV":
				vehicle_img.src = "img/map_trackedapc.png";
				break;
			case "M2A2 IFV":
			case "M2A3 IFV":
			case "BMP-1 IFV":
			case "BMP-2 IFV":
			case "FV510 IFV":
			case "FV510 UA IFV":
			case "MT-LBM 6MB IFV":
				vehicle_img.src = "img/map_trackedifv.png";
				break;
			case "ZU-23 Anti-Air Truck":
				vehicle_img.src = "img/map_truck_antiair.png";
				break;
			case "M939 Logistics Truck":
			case "Ural 4320 Logistics Truck":
			case "Ural 375 Logistics Truck":
			case "HX60 Logistics Truck":
				vehicle_img.src = "img/map_truck_logistics.png";
				break;
			case "M939 Transport Truck":
			case "Ural 4320 Transport Truck":
			case "Ural 375 Transport Truck":
			case "HX60 Transport Truck":
				vehicle_img.src = "img/map_truck_transport.png";
				break;
		}

		li.appendChild(vehicle_amount);
		li.appendChild(vehicle_img);
		li.appendChild(vehicle_name);
		li.appendChild(vehicle_delay);
		team_1_ul.appendChild(li);
	});

	map_dict[map]["Team_2"]["Vehicles"].forEach(element =>
	{
		var li = document.createElement("li");

		var vehicle_amount = document.createElement("p");
		vehicle_amount.innerHTML = element["Amount"];

		var vehicle_name = document.createElement("h6");
		vehicle_name.innerHTML = element["Name"];

		var vehicle_delay = document.createElement("small");
		vehicle_delay.innerHTML = element["Delay"];

		var vehicle_img = document.createElement("img");
		switch (element["Name"])
		{
			case "BMP-1 ZU-23 Anti Air APC":
			case "MT-LB ZU-23 Anti Air APC":
				vehicle_img.src = "img/map_antiair.png";
				break;
			case "BTR-80 APC":
			case "M1126 M2HB APC":
			case "M1126 M240 APC":
				vehicle_img.src = "img/map_apc.png";
				break;
			case "BTR-82A IFV":
				vehicle_img.src = "img/map_ifv.png";
				break;
			case "M-ATV M2HB":
			case "BRDM-2 Scout Car":
			case "Technical DshK":
			case "Armored Technical DshK":
				vehicle_img.src = "img/map_jeep.png";
				break;
			case "Armored Technical SPG-9":
			case "Technical SPG-9":
			case "M-ATV TOW":
			case "BRDM-2 Spandrel":
				vehicle_img.src = "img/map_jeep_antitank.png";
				break;
			case "Technical UB-32 Rocket Artillery":
				vehicle_img.src = "img/map_jeep_artillery.png";
				break;
			case "Logistics Technical":
				vehicle_img.src = "img/map_jeep_logistics.png";
				break;
			case "Transport Technical":
				vehicle_img.src = "img/map_jeep_transport.png";
				break;
			case "M-ATV M2HB CROWS":
			case "M-ATV M240 CROWS":
				vehicle_img.src = "img/map_jeep_turret.png";
				break;
			case "Minsk Motorcycle":
				vehicle_img.src = "img/map_motorcycle.png";
				break;
			case "M1A2 MBT":
			case "T-62 MBT":
			case "T-72B3 MBT":
			case "FV4034 MBT":
				vehicle_img.src = "img/map_tank.png";
				break;
			case "FV432 APC":
			case "MT-LB VMK APC":
			case "MT-LB APC":
			case "MT-LBM 6MA IFV":
				vehicle_img.src = "img/map_trackedapc.png";
				break;
			case "M2A2 IFV":
			case "M2A3 IFV":
			case "BMP-1 IFV":
			case "BMP-2 IFV":
			case "FV510 IFV":
			case "FV510 UA IFV":
			case "MT-LBM 6MB IFV":
				vehicle_img.src = "img/map_trackedifv.png";
				break;
			case "ZU-23 Anti-Air Truck":
				vehicle_img.src = "img/map_truck_antiair.png";
				break;
			case "M939 Logistics Truck":
			case "Ural 4320 Logistics Truck":
			case "Ural 375 Logistics Truck":
			case "HX60 Logistics Truck":
				vehicle_img.src = "img/map_truck_logistics.png";
				break;
			case "M939 Transport Truck":
			case "Ural 4320 Transport Truck":
			case "Ural 375 Transport Truck":
			case "HX60 Transport Truck":
				vehicle_img.src = "img/map_truck_transport.png";
				break;
		}

		li.appendChild(vehicle_amount);
		li.appendChild(vehicle_img);
		li.appendChild(vehicle_name);
		li.appendChild(vehicle_delay);
		team_2_ul.appendChild(li);
	});

	modal.style.display = "block";
}

window.onclick = function (event)
{
	if (event.target == modal)
	{
		var body = document.getElementsByTagName("BODY")[0];
		body.style.overflow = "auto";

		modal.style.display = "none";

		var team_1_ul = document.getElementById("team_1_vehicles");
		var team_2_ul = document.getElementById("team_2_vehicles");

		team_1_ul.innerHTML = "";
		team_2_ul.innerHTML = "";
	}
}

