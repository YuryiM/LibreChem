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

    $("#WF_calculate").onclick(function (){
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
});