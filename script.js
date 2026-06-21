const workouts = {
  sun: {
    title: "Chủ nhật — Full body nhẹ, làm quen form",
    note: "Hôm nay tập vừa sức, mục tiêu là nhớ động tác và không đau khớp.",
    time: "60–70 phút",
    exercises: [
      ["Đi bộ máy / xe đạp", "10 phút khởi động, tốc độ vừa nói chuyện được", "treadmill walking warm up gym beginner"],
      ["Goblet squat cầm tạ 5kg", "3 hiệp x 12 reps", "goblet squat dumbbell form beginner"],
      ["Dumbbell bench press hoặc chống đẩy gối", "3 hiệp x 10–12 reps", "dumbbell bench press form beginner"],
      ["One-arm dumbbell row", "3 hiệp x 10 reps mỗi bên", "one arm dumbbell row form beginner"],
      ["Dumbbell Romanian deadlift", "3 hiệp x 10 reps, lưng thẳng", "dumbbell romanian deadlift form beginner"],
      ["Shoulder press tạ nhẹ", "2–3 hiệp x 8–10 reps", "dumbbell shoulder press form beginner"],
      ["Plank", "3 hiệp x 30–45 giây", "plank proper form beginner"],
      ["Đi bộ dốc nhẹ", "15 phút cuối buổi", "incline treadmill walking fat loss beginner"]
    ]
  },
  mon: {
    title: "Thứ 2 — Ngực, vai, tay sau",
    note: "Không cần nâng nặng. Ưu tiên đẩy thẳng, vai không nhô lên quá nhiều.",
    time: "60–75 phút",
    exercises: [
      ["Chest press máy hoặc dumbbell press", "3 hiệp x 10–12 reps", "machine chest press form beginner"],
      ["Incline dumbbell press", "3 hiệp x 10 reps", "incline dumbbell press form beginner"],
      ["Shoulder press", "3 hiệp x 8–10 reps", "dumbbell shoulder press form beginner"],
      ["Lateral raise", "3 hiệp x 12–15 reps, dùng 2–4kg cũng được", "dumbbell lateral raise form beginner"],
      ["Triceps pushdown", "3 hiệp x 12 reps", "triceps pushdown cable form beginner"],
      ["Cardio nhẹ", "15–20 phút đi bộ nhanh hoặc đạp xe", "low intensity cardio after weights beginner"]
    ]
  },
  tue: {
    title: "Thứ 3 — Lưng, tay trước",
    note: "Kéo bằng lưng, không giật người. Nếu tạ nặng làm lắc người thì giảm tạ.",
    time: "60–70 phút",
    exercises: [
      ["Lat pulldown", "3 hiệp x 10–12 reps", "lat pulldown form beginner"],
      ["Seated row", "3 hiệp x 10–12 reps", "seated cable row form beginner"],
      ["One-arm dumbbell row", "3 hiệp x 10 reps mỗi bên", "one arm dumbbell row form beginner"],
      ["Face pull", "3 hiệp x 12–15 reps", "face pull cable form beginner"],
      ["Dumbbell curl", "3 hiệp x 10–12 reps", "dumbbell curl form beginner"],
      ["Plank hoặc dead bug", "3 hiệp", "dead bug exercise form beginner"]
    ]
  },
  wed: {
    title: "Thứ 4 — Cardio + bụng nhẹ",
    note: "Ngày này giúp đốt calo, phục hồi và giảm mỡ toàn thân. Đừng gập bụng quá nhiều.",
    time: "45–60 phút",
    exercises: [
      ["Đi bộ nhanh / đạp xe", "35–45 phút", "brisk walking treadmill beginner cardio"],
      ["Cable crunch hoặc crunch thường", "3 hiệp x 12–15 reps", "cable crunch form beginner"],
      ["Leg raise", "3 hiệp x 10 reps", "lying leg raise form beginner"],
      ["Side plank", "2 hiệp mỗi bên", "side plank proper form beginner"]
    ]
  },
  thu: {
    title: "Thứ 5 — Chân, mông",
    note: "Chân là nhóm cơ lớn, tập đều giúp giảm mỡ tốt. Đầu gối đi cùng hướng mũi chân.",
    time: "60–75 phút",
    exercises: [
      ["Leg press hoặc squat", "4 hiệp x 10–12 reps", "leg press form beginner"],
      ["Romanian deadlift", "3 hiệp x 10 reps", "romanian deadlift form beginner"],
      ["Leg curl", "3 hiệp x 12 reps", "leg curl machine form beginner"],
      ["Leg extension", "3 hiệp x 12 reps", "leg extension machine form beginner"],
      ["Calf raise", "4 hiệp x 15 reps", "standing calf raise form beginner"],
      ["Đi bộ nhẹ", "10–15 phút", "easy treadmill walk cooldown"]
    ]
  },
  fri: {
    title: "Thứ 6 — Full body đốt mỡ",
    note: "Buổi này gom toàn thân, giữ nhịp vừa phải, nghỉ 60–90 giây giữa hiệp.",
    time: "60–75 phút",
    exercises: [
      ["Squat hoặc leg press", "3 hiệp x 10 reps", "squat form beginner"],
      ["Chest press", "3 hiệp x 10 reps", "chest press machine form beginner"],
      ["Lat pulldown", "3 hiệp x 10 reps", "lat pulldown form beginner"],
      ["Dumbbell row", "3 hiệp x 10 reps", "dumbbell row form beginner"],
      ["Shoulder press", "2–3 hiệp x 10 reps", "dumbbell shoulder press form beginner"],
      ["Farmer walk", "3 lượt x 30–40 giây", "farmer walk dumbbell form beginner"],
      ["Cardio", "20 phút", "post workout cardio beginner"]
    ]
  },
  sat: {
    title: "Thứ 7 — Nghỉ hoặc đi bộ",
    note: "Không cần tập nặng. Đi bộ để đốt mỡ nhẹ và phục hồi.",
    time: "45–60 phút",
    exercises: [
      ["Đi bộ ngoài trời hoặc máy", "45–60 phút", "walking workout beginner fat loss"],
      ["Giãn cơ nhẹ", "5–10 phút", "full body stretch beginner"],
      ["Ngủ đủ", "Cố ngủ 7–9 tiếng", "sleep recovery muscle growth"]
    ]
  }
};

const panel = document.getElementById('workout-panel');
const tabs = document.querySelectorAll('.tab');
const videoList = document.getElementById('video-list');
const dayNames = { sun:'CN', mon:'T2', tue:'T3', wed:'T4', thu:'T5', fri:'T6', sat:'T7' };

function yt(query){
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

function render(day){
  const w = workouts[day];
  panel.innerHTML = `
    <div class="workout-top">
      <div>
        <h3>${w.title}</h3>
        <p>${w.note}</p>
      </div>
      <div class="pill">${w.time}</div>
    </div>
    <div class="exercise-list">
      ${w.exercises.map((ex,idx)=>{
        const key = `done-${day}-${idx}`;
        const done = localStorage.getItem(key) === '1';
        return `
          <div class="exercise ${done ? 'done':''}">
            <input type="checkbox" data-key="${key}" ${done ? 'checked':''} aria-label="Đánh dấu hoàn thành ${ex[0]}" />
            <div>
              <h4>${ex[0]}</h4>
              <p>${ex[1]}</p>
            </div>
            <a class="video-btn" href="${yt(ex[2])}" target="_blank" rel="noopener">Xem video</a>
          </div>
        `;
      }).join('')}
    </div>
  `;
  panel.querySelectorAll('input[type="checkbox"]').forEach(cb=>{
    cb.addEventListener('change', e=>{
      localStorage.setItem(e.target.dataset.key, e.target.checked ? '1' : '0');
      e.target.closest('.exercise').classList.toggle('done', e.target.checked);
    });
  });
}

tabs.forEach(tab=>{
  tab.addEventListener('click',()=>{
    tabs.forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    render(tab.dataset.day);
  });
});

function renderVideos(){
  const seen = new Map();
  Object.values(workouts).forEach(w => w.exercises.forEach(ex => {
    if(!seen.has(ex[0])) seen.set(ex[0], ex);
  }));
  videoList.innerHTML = Array.from(seen.values()).map(ex=>`
    <div class="video-card">
      <h3>${ex[0]}</h3>
      <p>${ex[1]}</p>
      <a class="btn btn--ghost" href="${yt(ex[2])}" target="_blank" rel="noopener">Mở video hướng dẫn</a>
    </div>
  `).join('');
}

document.getElementById('calc').addEventListener('click',()=>{
  const weight = Number(document.getElementById('weight').value || 0);
  const reps = Number(document.getElementById('reps').value || 0);
  const out = document.getElementById('calc-result');
  if(weight <= 0 || reps <= 0){
    out.textContent = 'Nhập tạ và số reps hợp lệ đã.';
    return;
  }
  if(reps < 8){
    out.textContent = `Giữ ${weight}kg, giảm tốc độ hạ tạ và tập tới khi đạt 8–10 reps form đẹp.`;
  } else if(reps < 12){
    out.textContent = `Tiếp tục giữ ${weight}kg. Mục tiêu gần nhất: 12 reps x 3 hiệp, không lắc người.`;
  } else if(reps < 15){
    out.textContent = `Ổn rồi. Giữ ${weight}kg thêm vài buổi để lên 15 reps x 3 hiệp.`;
  } else {
    const next = Math.round((weight + 1) * 2) / 2;
    out.textContent = `Có thể thử tăng lên khoảng ${next}kg. Khi tăng tạ, reps sẽ tụt về 8–10 là bình thường.`;
  }
});

render('sun');
renderVideos();
