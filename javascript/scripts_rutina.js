let gender = '';
let level = '';
let focus = '';
let type = '';

function selectGender(selectedGender) {
    gender = selectedGender;
    document.getElementById('gender-selection').style.display = 'none';
    document.getElementById('level-selection').style.display = 'block';
}

function selectLevel(selectedLevel) {
    level = selectedLevel;
    document.getElementById('level-selection').style.display = 'none';
    document.getElementById('focus-selection').style.display = 'block';
}

function selectFocus(selectedFocus) {
    focus = selectedFocus;
    document.getElementById('focus-selection').style.display = 'none';
    document.getElementById('type-selection').style.display = 'block';
}

function selectType(selectedType) {
    type = selectedType;
    document.getElementById('type-selection').style.display = 'none';
    generateRoutine();
    document.getElementById('routine-display').style.display = 'block';
}

function generateRoutine() {
    const routineContent = document.getElementById('routine-content');
    routineContent.innerHTML = '';

    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const routinePlans = {
        principiante: {
            superior: ['Push-ups', 'Dumbbell Rows', 'Shoulder Press', 'Bicep Curls', 'Tricep Dips'],
            inferior: ['Bodyweight Squats', 'Lunges', 'Glute Bridges', 'Calf Raises', 'Leg Raises'],
            fullbody: ['Jumping Jacks', 'Burpees', 'Mountain Climbers', 'Plank', 'Russian Twists']
        },
        intermedio: {
            superior: ['Bench Press', 'Pull-ups', 'Overhead Press', 'Hammer Curls', 'Skull Crushers'],
            inferior: ['Back Squats', 'Leg Press', 'Romanian Deadlifts', 'Seated Calf Raises', 'Lateral Lunges'],
            fullbody: ['Deadlifts', 'Clean and Press', 'Snatches', 'Box Jumps', 'Farmer Walks']
        },
        avanzado: {
            superior: ['Incline Bench Press', 'Weighted Pull-ups', 'Arnold Press', 'Preacher Curls', 'Overhead Tricep Extension'],
            inferior: ['Front Squats', 'Bulgarian Split Squats', 'Sumo Deadlifts', 'Standing Calf Raises', 'Hip Thrusts'],
            fullbody: ['Squat to Press', 'Muscle-ups', 'Turkish Get-ups', 'Battle Ropes', 'Pistol Squats']
        }
    };

    const restDays = ['Miércoles', 'Domingo'];
    const exerciseCount = (level === 'principiante') ? 4 : (level === 'intermedio') ? 5 : 6;
    const repsRange = (level === 'principiante') ? '10-12' : (level === 'intermedio') ? '12-15' : '15-20';

    for (let day of days) {
        let dayDiv = document.createElement('div');
        dayDiv.className = 'routine-day';
        let dayTitle = document.createElement('h3');
        dayTitle.textContent = day;
        dayDiv.appendChild(dayTitle);

        if (restDays.includes(day)) {
            let restDiv = document.createElement('div');
            restDiv.className = 'routine-exercise';
            restDiv.textContent = 'Día de descanso';
            dayDiv.appendChild(restDiv);
        } else {
            let selectedExercises = routinePlans[level][focus];
            for (let i = 0; i < exerciseCount; i++) {
                let exercise = selectedExercises[i % selectedExercises.length];
                let exerciseDiv = document.createElement('div');
                exerciseDiv.className = 'routine-exercise';
                exerciseDiv.textContent = `${exercise} - ${repsRange} reps`;
                dayDiv.appendChild(exerciseDiv);
            }
        }
        routineContent.appendChild(dayDiv);
    }
}