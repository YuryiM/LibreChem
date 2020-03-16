$(document).ready(function(){
    $("#idealGasLaw").click(function(){
        const gasConst = 0.082057;
        var p = $("#IGL_pressure").val();
        var v = $("#IGL_vol").val();
        var m = $("#IGL_moles").val();
        var t = $("#IGL_temp").val();
        if(p.length == 0 && v.length != 0 && m.length != 0 && t.length != 0){
            $("#IGL_pressure").val((gasConst * t * m)/v);
        }
        else if(p.length != 0 && v.length == 0 && m.length != 0 && t.length != 0){
            $("#IGL_vol").val((gasConst * t * m)/p);
        }
        else if(p.length != 0 && v.length != 0 && m.length == 0 && t.length != 0){
            $("#IGL_moles").val((p * v)/(gasConst * t));
        }
        else if(p.length != 0 && v.length != 0 && m.length != 0 && t.length == 0){
            $("#IGL_temp").val((p * v)/(gasConst * m));
        }
        else{
            window.alert("Improper Ideal Gas Law input, please try again")
        }
    });

    $("#photonEnergy").click(function(){
        const plancksConst = 6.62607015e-34;
        var v = $("#E_photon_frequency").val();
        var E = $("#E_photon_energy").val();
        if(E.length == 0 && v.length != 0){
            $("#E_photon_energy").val(plancksConst * v);
        }
        else if(E.length != 0 && v.length == 0){
            $("#E_photon_frequency").val(E / plancksConst);
        }
        else{
            window.alert("Improper Energy of a photon input, please try again")
        }
    });

    $("#gasLaw").click(function(){
        var p1 = $("#gasLaw_p1").val();
        var v1 = $("#gasLaw_v1").val();
        var t1 = $("#gasLaw_t1").val();
        var p2 = $("#gasLaw_p2").val();
        var v2 = $("#gasLaw_v2").val();
        var t2 = $("#gasLaw_t2").val();

        if(p1.length == 0 && v1.length != 0 && t1.length != 0 && p2.length != 0 && v2.length != 0 && t2.length !=0){
            $("#gasLaw_p1").val((p2 * v2 * t1)/(t2 * v1));
        }
        else if(p1.length != 0 && v1.length == 0 && t1.length != 0 && p2.length != 0 && v2.length != 0 && t2.length !=0){
            $("#gasLaw_v1").val((p2 * v2 * t1)/(t2 * p1))
        }
        else if(p1.length != 0 && v1.length != 0 && t1.length == 0 && p2.length != 0 && v2.length != 0 && t2.length !=0){
            $("#gasLaw_t1").val((t2 * p1 * v1)/(p2 * v2))
        }
        else if(p1.length != 0 && v1.length != 0 && t1.length != 0 && p2.length == 0 && v2.length != 0 && t2.length !=0){
            $("#gasLaw_p2").val((p1 * v1 * t2)/(t1 * v2));
        }
        else if(p1.length != 0 && v1.length != 0 && t1.length != 0 && p2.length != 0 && v2.length == 0 && t2.length !=0){
            $("#gasLaw_v2").val((p1 * v1 * t2)/(t1 * p2));
        }
        else if(p1.length != 0 && v1.length != 0 && t1.length != 0 && p2.length != 0 && v2.length != 0 && t2.length ==0){
            $("#gasLaw_t2").val((t1 * p2 * v2)/(p1 * v1));
        }
        else{
            window.alert("Improper Combined Gas Law input, please try again")
        }
    });
    $("#molarityCalc").click(function (){
        const solute = $("#M_solute").val();
        const solvent = $("#M_solvent").val();
        const molarity = $("#Molarity").val();

        if(solute.length == 0 && solvent.length != 0 && molarity.length != 0){
            $("#M_solute").val(solvent * molarity);
        }
        else if(solute.length != 0 && solvent.length == 0 && molarity.length != 0){
            $("#M_solvent").val(solute / molarity);
        }
        else if(solute.length != 0 && solvent.length != 0 && molarity.length == 0){
            $("#Molarity").val(solute / solvent);
        }
        else{
            window.alert("Improper Molarity input, please try again")
        }
    });

    $("#WF_calculate").click(function (){
        const c = 299792458;
        const freq = $("#WF_frequency").val();
        const wavelength = $("#WF_wavelength").val();

        if(freq.length == 0 && wavelength.length != 0){
            $("#WF_frequency").val(c / wavelength);
        }
        else if(freq.length != 0 && wavelength.length == 0){
            $("#WF_wavelength").val(c / freq);
        }
        else{
            window.alert("Improper Wavelength/Frequency input, please try again")
        }
    });
    $("#SHE_calc").click(function () {
        const c = $("#SHE_specific_heat").val();
        const m = $("#SHE_mass").val();
        const t = $("#SHE_temp").val();
        const q = $("#SHE_heat").val();

        if(c.length == 0 && m.length != 0 && t.length != 0 && q.length != 0){
            $("#SHE_specific_heat").val((q)/(m * t));
        }
        else if(c.length != 0 && m.length == 0 && t.length != 0 && q.length != 0){
            $("#SHE_specific_heat").val((q)/(c * t));
        }
        else if(c.length != 0 && m.length != 0 && t.length == 0 && q.length != 0){
            $("#SHE_specific_heat").val((q)/(m * c));
        }
        else if(c.length != 0 && m.length != 0 && t.length != 0 && q.length == 0){
            $("#SHE_specific_heat").val(c * m * t);
        }
        else{
            window.alert("Improper Specific Heat input, please try again")
        }
    })
    $("#KE_calc").click(function () {
        const m = $("#KE_mass").val();
        const v = $("#KE_speed").val();
        const ke = $("#KE_result").val();

        if(m.length == 0 && v.length != 0 && ke.length != 0){
            $("#KE_mass").val((2 * ke)/Math.pow(v, 2));
        }
        else if(m.length != 0 && v.length == 0 && ke.length != 0){
            $("#KE_speed").val(Math.sqrt((2 * ke)/m));
        }
        else if(m.length != 0 && v.length != 0 && ke.length == 0){
            $("#KE_result").val(0.5 * m * Math.pow(v, 2));
        }
        else {
            window.alert("Improper KE of a Molecule input, please try again")
        }
    })
});