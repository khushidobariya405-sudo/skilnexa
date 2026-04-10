/* --- onboarding.js --- */

const GUJARAT_UNIVERSITIES = [
   "Gujarat Technological University (GTU)",
    "Nirma University",
    "Maharaja Sayajirao University of Baroda (MSU)",
    "Gujarat University (GU)",
    "Sardar Patel University (SPU)",
    "Dharmsinh Desai University (DDU)",
    "DA-IICT",
    "Pandit Deendayal Energy University (PDEU)",
    "Charotar University of Science and Technology (CHARUSAT)",
    "Ganpat University (GUNI)",
    "Parul University",
    "Marwadi University",
    "RK University",
    "Silver Oak University",
    "Indus University",
    "Ahmedabad University",
    "CEPT University",
    "Navrachana University",
    "Atmiya University",
    "Saurashtra University",
    "Veer Narmad South Gujarat University (VNSGU)",
    "Hemchandracharya North Gujarat University (HNGU)",
    "Kranti Guru Shyamji Krishna Verma Kachchh University",
    "Bhakta Kavi Narasinh Mehta University",
    "Junagadh Agricultural University",
    "Anand Agricultural University",
    "Navsari Agricultural University",
    "Sardar Krushinagar Dantiwada Agricultural University",
    "Sumandeep Vidyapeeth",
    "P P Savani University",
    "Auro University",
    "Rai University",
    "G L S University",
    "TeamLease Skills University",
    "LDRP Institute of Technology and Research"
];

// Degree List
const GUJARAT_DEGREES = [
    "B.E. Computer Engineering",
    "B.E. Information Technology",
    "B.E. Mechanical Engineering",
    "B.E. Civil Engineering",
    "B.E. Electrical Engineering",
    "B.E. Electronics & Communication",
    "B.Tech Computer Science",
    "B.C.A. (Bachelor of Computer Applications)",
    "M.C.A. (Master of Computer Applications)",
    "B.Sc. IT",
    "M.Sc. IT",
    "B.Com (Bachelor of Commerce)",
    "M.Com (Master of Commerce)",
    "B.B.A. (Bachelor of Business Administration)",
    "M.B.A. (Master of Business Administration)",
    "Diploma Engineering",
    "B.Pharm",
    "M.Pharm"
];

document.addEventListener("DOMContentLoaded", () => {
    const collegeInput = document.getElementById('college');
    const degreeInput = document.getElementById('degree');
    
    // College Real-time Validation
    setupRealTimeValidation(collegeInput, GUJARAT_UNIVERSITIES);
    
    // Degree Real-time Validation
    setupRealTimeValidation(degreeInput, GUJARAT_DEGREES);
});

function setupRealTimeValidation(inputElement, dataList) {
    if (inputElement) {
        inputElement.addEventListener('input', function() {
            const val = this.value.trim();
            const isMatch = dataList.some(item => 
                item.toLowerCase() === val.toLowerCase()
            );

            if (isMatch) {
                this.classList.add('valid-input');
                this.classList.remove('invalid-input');
            } else {
                this.classList.remove('valid-input');
                if(val.length > 2) this.classList.add('invalid-input');
            }
        });
    }
}

function validateAndNext(nextStep) {
    const activeStep = document.querySelector('.step.active');
    const inputs = activeStep.querySelectorAll('[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('invalid-input');
        } else {
            input.classList.remove('invalid-input');
        }
    });

    if (activeStep.id === "step1") {
        const collegeVal = document.getElementById('college').value.trim();
        const degreeVal = document.getElementById('degree').value.trim();

        // University Validation
        const isUniValid = GUJARAT_UNIVERSITIES.some(uni => uni.toLowerCase() === collegeVal.toLowerCase());
        // Degree Validation
        const isDegreeValid = GUJARAT_DEGREES.some(deg => deg.toLowerCase() === degreeVal.toLowerCase());

        if (!isUniValid) {
            isValid = false;
            document.getElementById('college').classList.add('invalid-input');
            alert("Please select a valid University name from the list.");
        } else if (!isDegreeValid) {
            isValid = false;
            document.getElementById('degree').classList.add('invalid-input');
            alert("Please select a valid Degree from the list.");
        }
    }

    if (isValid) goToStep(nextStep);
}

// ... Baki na goToStep ane handleFinalSubmit functions same rahese ...
function goToStep(step) {
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.getElementById('step' + step).classList.add('active');
    const progress = (step / 3) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

function handleFinalSubmit(e) {
    e.preventDefault();
    document.getElementById('successPopup').style.display = 'flex';
    setTimeout(() => {
        window.location.href = '/Home/InternshipList'; 
    }, 2500);
}