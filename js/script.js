$(function(){
	
	//Clear all inputs
	$('input').val('');

	//Bind inputs
	$('.typography').bind('change paste keyup', Typography_Calculate);
	$('.Temp').bind('change paste keyup', Temperature_Calculate);
	$('.dpi').bind('change paste keyup', Dpi_Calculate);
	
});

function Typography_Calculate()
{
	var Meter,Centimeter,Millimeter,Pixel72,Inch,Pt,em;
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
		case 'Typo_Meter':
			Meter = Value;
			Centimeter = Meter * 100;
			Millimeter = Meter * 1000;
			Pixel72 = Meter * 2834.64566929;
			Inch = Meter * 39.37007874016;
			Pt = Meter * 2834.645669291;
			em = Meter * 2845.275590551;
		break;
		case 'Typo_Centimeter':
			Centimeter = Value;
			Meter = Centimeter * 0.01;
			Millimeter = Centimeter * 10;
			Pixel72 = Centimeter * 28.3464566929;
			Inch = Centimeter * 0.3937007874016;
			Pt = Centimeter * 28.34645669291;
			em = Centimeter * 28.45275590551;
		break;
		case 'Typo_Millimeter':
			Millimeter = Value;
			Centimeter = Millimeter * 0.1;
			Meter = Millimeter * 0.001;
			Pixel72 = Millimeter * 2.8346456693;
			Inch = Millimeter * 0.03937007874016;
			Pt = Millimeter * 2.834645669291;
			em = Millimeter * 2.845275590551;
		break;
		case 'Typo_Pixel72':
			Pixel72 = Value;
			Millimeter = Pixel72 * 0.3527777778;
			Centimeter = Pixel72 * 0.0352777778; 
			Meter = Pixel72 * 0.000352777778;
			Inch = Pixel72 * 0.0138888889;
			Pt = Pixel72;
			em = Pixel72 * 0.063;
		break;
		case 'Typo_Inch':
			Inch = Value;
			Pixel72 = Inch * 72;
			Pt = Inch * 71.9999995174;
			Centimeter = Inch * 2.54;
			Millimeter = Centimeter * 10;
			Meter = Inch * 0.0254;
			em = Inch * 72.269999534417997;
		break;
		case 'Typo_Pt':
			Pt = Value;
			Pixel72 = Pt;
			Inch = Pt * 0.01388888888889;
			Millimeter = Pt * 0.3527777777778;
			Centimeter = Millimeter / 10;
			Meter = Centimeter / 100;
			em = Pt * 1.00375;
		break;
		case 'Typo_em':
			em = Value;
			Pixel72 = em * 16;
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
	Pixel72 = Math.round(Pixel72 * 1000) / 1000;
	Inch = Math.round( Inch * 1000) / 1000;
	Pt = Math.round(Pt * 1000) / 1000;
	em = Math.round(em * 1000) / 1000;


	//Set Values
	$('#Typo_Meter').not($(this)).val(Meter);
	$('#Typo_Centimeter').not($(this)).val(Centimeter);
	$('#Typo_Millimeter').not($(this)).val(Millimeter);
	$('#Typo_Pixel72').not($(this)).val(Pixel72);
	$('#Typo_Inch' ).not($(this)).val(Inch);
	$('#Typo_Pt').not($(this)).val(Pt);
	$('#Typo_em').not($(this)).val(em);
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

function Dpi_Calculate()
{
	var dpi72;
	var dpi300;
	var Value;


	Value = parseFloat($(this).val());

	//If the input isn't a valid number, clear
	// the other values and return early
	if(isNaN(Value))
	{
		$('.dpi').not($(this)).val('');
		return;
	}

	switch($(this).attr('id'))
	{
		case 'dpi_72':
			dpi72 = Value;
			dpi300 = dpi72 * 0.24;
		break;

		case 'dpi_300':
			dpi300 = Value;
			dpi72 = dpi300 * 4.16;
		break;

	}

	//Round
	dpi72 = Math.round(dpi72 * 100) / 100;
	dpi300 = Math.round(dpi300 * 100) / 100;

	//Set Values
	$('#dpi_72').not($(this)).val(dpi72);
	$('#dpi_300').not($(this)).val(dpi300);
}



