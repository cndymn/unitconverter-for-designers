$(function(){
	
	//Clear all inputs
	$('input').val('');

	//Bind inputs
	$('.Temp').bind('change paste keyup', Temperature_Calculate);
	$('.Distance').bind('change paste keyup', Distance_Calculate);
});

function Distance_Calculate()
{
	var Meter,Centimeter,Millimeter,Pixel,Inch,Pt,em;
	var Value;


	Value = parseFloat($(this).val());

	//If the input isn't a valid number, clear
	// the other values and return early
	if(isNaN(Value))
	{
		$('.Distance').not($(this)).val('');
		return;
	}

	switch($(this).attr('id'))
	{
		case 'Dist_Meter':
			Meter = Value;
			Centimeter = Meter * 100;
			Millimeter = Meter * 1000;
			Pixel = Meter * 3779.527559055;
			Inch = Meter * 39.37007874016;
			Pt = Meter * 2834.645669291;
			em = Meter * 2845.275590551;
		break;
		case 'Dist_Centimeter':
			Centimeter = Value;
			Meter = Centimeter * 0.01;
			Millimeter = Centimeter * 10;
			Pixel = Centimeter * 37.79527559055;
			Inch = Centimeter * 0.3937007874016;
			Pt = Centimeter * 28.34645669291;
			em = Centimeter * 28.45275590551;
		break;
		case 'Dist_Millimeter':
			Millimeter = Value;
			Centimeter = Millimeter * 0.1;
			Meter = Millimeter * 0.001;
			Pixel = Millimeter * 3.779527559055;
			Inch = Millimeter * 0.03937007874016;
			Pt = Millimeter * 2.834645669291;
			em = Millimeter * 2.845275590551;
		break;
		case 'Dist_Pixel':
			Pixel = Value;
			Millimeter = Pixel * 0.26458333333333;
			Centimeter = Pixel * 0.02645833333333;
			Meter = Pixel * 0.0002645833333333;
			Inch = Pixel * 0.01041666666667;
			Pt = Pixel * 0.75;
			em = Pixel * 0.7528125;
		break;
		case 'Dist_Inch':
			Inch = Value;
			Pixel = Inch * 95.999999365;
			Pt = Inch * 71.9999995174;
			Centimeter = Inch * 2.54;
			Millimeter = Centimeter * 10;
			Meter = Inch * 0.0254;
			em = Inch * 72.269999534417997;
		break;
		case 'Dist_Pt':
			Pt = Value;
			Pixel = Pt * 1.333333333333;
			Inch = Pt * 0.01388888888889;
			Millimeter = Pt * 0.3527777777778;
			Centimeter = Millimeter / 10;
			Meter = Centimeter / 100;
			em = Pt * 1.00375;
		break;
		case 'Dist_em':
			em = Value;
			Pixel = em * 1.328352013284;
			Inch = em * 0.01383700013837;
			Millimeter = em * 0.3514598035146;
			Centimeter = Millimeter / 10;
			Meter = Centimeter / 100;
			Pt = em * 0.9962640099626;
		break;

	}

	//Round
	Meter = Math.round(Meter * 100000000) / 100000000;
	Centimeter = Math.round(Centimeter * 1000) / 1000;
	Millimeter = Math.round(Millimeter * 1000) / 1000;
	Pixel = Math.round(Pixel * 1000) / 1000;
	Inch = Math.round( Inch * 1000) / 1000;
	Pt = Math.round(Pt * 1000) / 1000;
	em = Math.round(em * 1000) / 1000;


	//Set Values
	$('#Dist_Meter').not($(this)).val(Meter);
	$('#Dist_Centimeter').not($(this)).val(Centimeter);
	$('#Dist_Millimeter').not($(this)).val(Millimeter);
	$('#Dist_Pixel').not($(this)).val(Pixel);
	$('#Dist_Inch' ).not($(this)).val(Inch);
	$('#Dist_Pt').not($(this)).val(Pt);
	$('#Dist_em').not($(this)).val(em);
}

function Temperature_Calculate()
{
	var F;
	var C;
	var K;
	var Value;


	Value = parseFloat($(this).val());

	//If the input isn't a valid number, clear
	// the other values and return early
	if(isNaN(Value))
	{
		$('.Temp').not($(this)).val('');
		return;
	}

	switch($(this).attr('id'))
	{
		case 'Temp_F':
			F = Value;
			C = (F - 32) * (5/9);
			K = (F + 459.67) * (5/9);
		break;

		case 'Temp_C':
			C = Value;
			F = C * (9/5) + 32;
			K = C + 273.15;
		break;

		case 'Temp_K':
			K = Value;
			F = K * (9/5) - 459.67;
			C = - 273.15;
		break;
	}

	//Round
	F = Math.round(F * 100) / 100;
	C = Math.round(C * 100) / 100;
	K = Math.round(K * 100) / 100;

	//Set Values
	$('#Temp_F').not($(this)).val(F);
	$('#Temp_C').not($(this)).val(C);
	$('#Temp_K').not($(this)).val(K);
}