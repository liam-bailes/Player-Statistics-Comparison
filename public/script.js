const data_key = {
                   appearences:  {
                      key: 'appearences',
                      display_text: 'Appearences',
                      direction: 'm',
                      obj: false,
                      category: 'active' 
                    },
                    minutes: {
                      key: 'minutes',
                      display_text: 'Minutes',
                      direction: 'm',
                      obj: false,
                      category: 'active' 
                    },
                    yellowcards: {
                      key: 'yellowcards',
                      display_text: 'Yellow Cards',
                      direction: 'l',
                      obj: false,
                      category: 'dicipline' 
                    },
                    redcards: {
                      key: 'redcards',
                      display_text: 'Red Cards',
                      direction: 'l',
                      obj: false,
                      category: 'dicipline' 
                    },
                    yellowred: {
                      key: 'yellowred',
                      display_text: 'Yellow Card -->  Red Card',
                      direction: 'l',
                      obj: false,
                      category: 'dicipline' 
                    },
                    blocks: {
                      key: 'blocks',
                      display_text: 'Blocks',
                      direction: 'm',
                      obj: false,
                      category: 'defence' 
                    },
                    cleansheets: {
                      key: 'cleansheets',
                      display_text: 'Clean Sheets',
                      direction: 'm',
                      obj: false,
                      category: 'active'
                    },
                    duelstotal: {
                      key: 'duels',
                      second_key: 'total',
                      display_text: 'Total Duels',
                      direction: 'm',
                      obj: true,
                      category: 'defence' 
                    },
                    foulscommitted: {
                      key: 'fouls',
                      second_key: 'committed', 
                      display_text: 'Fouls Committed',
                      direction: 'l',
                      obj: true,
                      category: 'defence' 
                    },
                    interceptions: {
                      key: 'interceptions',
                      display_text: 'Interceptions',
                      direction: 'm',
                      obj: false,
                      category: 'defence' 
                    },
                    tackles: {
                      key: 'tackles',
                      display_text: 'Tackles',
                      direction: 'm',
                      obj: false,
                      category: 'defence' 
                    },
                    owngoals: {
                      key: 'owngoals',
                      display_text: 'Own Goals',
                      direction: 'l',
                      obj: false,
                      category: 'defence' 
                    },
                    assists: {
                      key: 'assists',
                      display_text: 'Assists',
                      direction: 'm',
                      obj: false,
                      category: 'active' 
                    },
                    crossestotal : {
                      key: 'crosses',
                      second_key: 'total',
                      display_text: 'Total Crosses',
                      direction: 'm',
                      obj: true,
                      category: 'crosses' 
                    },
                    crossesaccurate: {
                      key: 'crosses',
                      second_key: 'accurate',
                      display_text: 'Accurate Crosses',
                      direction: 'm',
                      obj: true,
                      category: 'crosses' 
                    },
                    dribblesattempts: {
                      key: 'dribbles',
                      second_key: 'attempts',
                      display_text: 'Attempted Dribbles',
                      direction: 'm',
                      obj: true,
                      category: 'dribbles' 
                    },
                    dribblesdribbled_past: {
                      key: 'dribbles',
                      second_key: 'dribbled_past',
                      display_text: 'Dribbled Past',
                      direction: 'm',
                      obj: true,
                      category: 'dribbles' 
                    },
                    dribblessuccess:{
                      key: 'dribbles',
                      second_key: 'success',
                      display_text: 'Sucessful Dribbles',
                      direction: 'm',
                      obj: true,
                      category: 'dribbles' 
                    }, 
                    foulsdrawn: {
                      key: 'fouls',
                      second_key: 'drawn',
                      display_text: 'Fouls Drawn',
                      direction: 'm',
                      obj: true,
                      category: 'defence'
                    },
                    goals: {
                      key: 'goals',
                      display_text: 'Goals',
                      direction: 'm',
                      obj: false,
                      category: 'active' 
                    },
                    hit_post: {
                      key: 'hit_post',
                      display_text: 'Post Hit',
                      direction: 'm',
                      obj: false,
                      category: 'shots' 
                    },
                    penaltieswon: {
                      key: 'penalties',
                      second_key: 'won',
                      display_text: 'Penalties Won',
                      direction: 'm',
                      obj: true,
                      category: 'penalties' 
                    },
                    penaltiesscores: {
                      key: 'penalties',
                      second_key: 'scores',
                      display_text: 'Penalties Scored',
                      direction: 'm',
                      obj: true,
                      category: 'penalties' 
                    },

                    penaltiesmissed: {
                      key: 'penalties',
                      second_key: 'missed',
                      display_text: 'Penalties Missed',
                      direction: 'l',
                      obj: true,
                      category: 'penalties'  
                    },
                    penaltiescommitted: {
                      key: 'penalties',
                      second_key: 'committed',
                      display_text: 'Penalties Conceeded',
                      direction: 'l',
                      obj: true,
                      category: 'penalties'  
                    },
                    passestotal: {
                      key: 'passes',
                      second_key: 'total',
                      display_text: 'Total Passes',
                      direction: 'm',
                      obj: true,
                      category: 'passes' 
                    },
                    passesaccuracy: {
                      key: 'passes',
                      second_key: 'accuracy',
                      display_text: 'Pass Accuracy',
                      direction: 'm',
                      obj: true,
                      percent: true,
                      category: 'passes' 
                    },
                    passeskey_passes: {
                      key: 'passes',
                      second_key: 'key_passes',
                      display_text: 'Key Passes',
                      direction: 'm',
                      obj: true,
                      category: 'passes' 
                    },
                    shotsshots_total: {
                      key: 'shots',
                      second_key: 'shots_total',
                      display_text: 'Total Shots',
                      direction: 'm',
                      obj: true,
                      category: 'shots' 
                    },
                    shotsshots_on_target: {
                      key: 'shots',
                      second_key: 'shots_on_target',
                      display_text: 'Shots on Target',
                      direction: 'm',
                      obj: true,
                      category: 'shots' 
                    },
                    dispossesed: {
                      key: 'dispossesed',
                      display_text: 'Numebr of Times Dispossed',
                      direction: 'l',
                      obj: false,
                      category: 'dribbles' 
                    },
                    insideboxsaves: {
                      key: 'inside_box_saves',
                      display_text: 'Inside the box Saves',
                      direction: 'm',
                      obj: false,
                      category: 'Goal Keeper' 
                    },
                    saves: {
                      key: 'saves',
                      display_text: 'Saves',
                      direction: 'm',
                      obj: false,
                      category: 'Goal Keeper'  
                    }
                  }      
                
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const searchBtn = document.getElementById('submit_player_search');
let searchInput = document.getElementById('player_search_bar');
const playerSearchArea = document.getElementById('search_results_area');
const player2btn = document.getElementById('add_player2');
let players_stored_data = [];

// ######################################################################
                            // Code to handle modal
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal);
  });
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active');
  overlay.classList.remove('active');
  document.getElementById('search_results_area').innerHTML = '';
  searchInput.value = '';
}
// ######################################################################
// Search for players functionality

searchBtn.addEventListener('click', async ()=>{
  const playerSearchArea = document.getElementById('search_results_area');
  
  if(searchInput.value.length < 2){
    let err_msg = document.createElement(`p`);
    err_msg.className = 'search_error'
    err_msg.textContent = "Search not performed, please enter a search term";
    document.getElementById('search_results_area').appendChild(err_msg);
  } else {
    document.getElementById('search_results_area').innerHTML = '';
    let playerData = await searchPlayer(searchInput.value, "name");
    /*
    if(parseInt(playerData.data.length) === 0){
      let no_results_msg = document.createElement(`p`);
      no_results_msg.className = 'search_error'
      no_results_msg.textContent = 'We could not find anyone by that name :('
      document.getElementById('search_results_area').appendChild(no_results_msg);
    }
    */
    const search_results = playerList(playerData.data);
    playerSearchArea.innerHTML = search_results;


    let add_players_button_elements = document.querySelectorAll('.choose_player');
    add_players_button_elements.forEach(button => {
      button.addEventListener("click", () => {
        if(document.getElementById('player_card_1')){
          selectPlayer(button.id, 2);
        } else {
          selectPlayer(button.id, 1);
        }
      });
    })
  }
});

function assign_player_stored_data(data, which_player){
  players_stored_data[which_player] = data;
}
function remove_player_stored_data(which_player){
  players_stored_data[which_player] = '';
}
function get_data_from_store(which_player, season_id){
  let all_seasons = players_stored_data[which_player];
  return all_seasons;

}

async function searchPlayer(player_data, search_type){
  const data = {player_data, search_type};
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  const response = await fetch('/api', options);
  const responseData = response.json();
  return responseData;
}

const playerList = (data) => {
  let list = '';
  for (const key of Object.keys(data)){
    if(data[key].image_path !== "https://cdn.sportmonks.com/images/soccer/placeholder.png"){
      if(data[key].stats.data.length >= 2){
        let element = `<div class ="list_element"><span><img src="${data[key].image_path}" alt="photo of ${data[key].display_name}" class="search_img"></span>${data[key].display_name}    <button class="choose_player" id="${data[key].player_id}">+</button></div>`;
      list += element;
      }
    }
  }
  for (const key of Object.keys(data)){
    if(data[key].image_path === "https://cdn.sportmonks.com/images/soccer/placeholder.png"){
      if(data[key].stats.data.length >= 2){
        let element = `<div class ="list_element"><span><img src="${data[key].image_path}"; alt="photo of ${data[key].display_name}" class="search_img"></span>${data[key].display_name}<button class="choose_player" id="${data[key].player_id}">+</button></div>`;
      list += element;
      }
    }
  }
  return list;
}

async function selectPlayer(player_id, which_player){
  const player_data = await searchPlayer(player_id, "id");
  assign_player_stored_data(player_data, which_player);
  const player_card_element = document.getElementById(`player${which_player}_card`);
  const img_element = document.createElement('img');

  img_element.src =  player_data.data.image_path;;
  img_element.alt = `Image of ${player_data.data.display_name}`;
  createPlayerCard(player_data, which_player);
}
// ######################################################################
// Generate Player cards

async function createPlayerCard(player_data, which_player){
  
  let base = generate_base_card(which_player);
  let header = generate_header(which_player);
  let l1 = generate_level_1(player_data, which_player);
  let l2_data = await generate_level_2(player_data, which_player);
  let card_area = document.getElementById(`player${which_player}_card`);
  base.appendChild(header);
  base.appendChild(l1);
  base.appendChild(l2_data[0]);
  card_area.appendChild(base);
  
  let seasons_dropdown = document.getElementById(`player${which_player}_season_menu`);
  seasons_dropdown.addEventListener('change',(event)=>{
    
    if(document.getElementsByClassName(`l3`).length ===2){
      regenerate_all_l3();
    }  else if(document.getElementsByClassName(`l3`).length ===1) {
      delete_l3(which_player);
      enable_stats();
      remove_nulls();
      let l3_new = generate_l3(player_data, event.target.value, which_player, data_key, find_checked_stats());
      base.appendChild(l3_new);
      add_lines(which_player);
      if(document.getElementsByClassName('player_card').length ===2){
        if(document.getElementById('player_1_l3')){
          style_lines(find_current_stats(1));
        } else {
          style_lines(find_current_stats(2));
        }
      }
    }
  });

  let remove_btn = document.getElementById(`remove_player_${which_player}`);
  remove_btn.addEventListener('click', ()=>{
    remove_card(which_player);
  });
  seasons_dropdown.namedItem(l2_data[1]).selected = true;
  let l3;
  if(document.getElementById(`player_1_l3`)){
    l3 = generate_l3(player_data, l2_data[1], which_player, data_key, find_current_stats(1)); 
    style_lines(find_checked_stats(1));
  } else if (!document.getElementById(`player_1_l3`) && document.getElementById(`player_2_l3`)) { 
    l3 = generate_l3(player_data, l2_data[1], which_player, data_key, find_current_stats(2));
    style_lines(find_checked_stats(2));
  } else {
    l3 = generate_l3(player_data, l2_data[1], which_player, data_key, 'default');   
  }
  base.appendChild(l3);

  if(document.getElementById('stats_list').children.length === 0){
    populate_modal();
  }

  
  if(!document.getElementById('edit_stats')){
    generate_edit_stats_button(); 
  } 
  hide_add_player_button(which_player);
  closeModal(modal);

  const edit_modal = document.querySelectorAll('[data-edit_stats_modal]');
  edit_modal.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(edit_stats_modal);
      enable_stats()
      remove_nulls();

      let current_stats = find_current_stats(1);
      current_stats.forEach(stat =>check_stat_box(stat));
      let stats_list_listeners = document.getElementsByClassName('stat_checkbox');
      
    });
  })

  add_lines(which_player);
  if(document.getElementsByClassName('player_card').length ===2){
    style_lines(find_current_stats(1));
  }
}



function generate_base_card(which_player){
  let base_div = document.createElement('div');
  base_div.className = `player_card`;
  base_div.id = `player_card_${which_player}`;
  return base_div;
}

function generate_header(which_player){
  let head = document.createElement('div');
  head.id = `player_${which_player}_card_header`;
  head.className = "card_header";
  let remove_button_html = `<button id="remove_player_${which_player}" class="remove_player">X</button>`;
  head.innerHTML = remove_button_html;
  return head;
}

function generate_level_1(player_data, which_player){
  let l1_div = document.createElement('div');
  l1_div.id = `player_${which_player}_l1`;
  l1_div.className = "l1";
  let l1_source = `
      <p id=player_${which_player}_name>${player_data.data.display_name}</p>
      <img src=${player_data.data.image_path} id="player${which_player}_card_image" class="player_card_image">
      <p class="weight&height"></p>
      `;
  l1_div.innerHTML = l1_source;
  return l1_div;
}

function find_default_season(player_data, seasons){
  const current_season = '2021/2022';
  let relevant_season = []
  let seasons_data = player_data.data.stats.data;
 

  for(let i=0; i< seasons.length; i++){
    if(seasons[i][0].match(current_season)){
      relevant_season.push([seasons[i][2], seasons[i][1]]);
    }
  }

  if(relevant_season.length === 0){
    return seasons[0][0];
  }else {
    return relevant_season[0][0];
  }
}

async function generate_level_2(player, which_player){
  let season_ids = [];
  let l2_div = document.createElement('div');
  let menu = document.createElement('select');

  menu.className = "season_list";
  menu.id = `player${which_player}_season_menu`;
  l2_div.className = "l2";
 
  player.data.stats.data.forEach(season => {
    season_ids.push(season.season_id);
  });
  let season_info = await getSeasons(season_ids);
  let default_season = find_default_season(player, season_info);
  for(let i=0; i< season_info.length; i++){

    let option = document.createElement('option');
    if(i===0){
      option.value = `Select Season`;
      option.text = `Select Season`;
    } else {
      option.value = `${season_info[i][2]}`;
      option.text = `${season_info[i][0]} ${season_info[i][1]}`;
      option.id = `${season_info[i][2]}`;
    }
    menu.appendChild(option);
  }
  l2_div.appendChild(menu);
  let return_data = [l2_div, default_season];

  return return_data
}

async function getSeasons(season_ids){
  const data = {season_ids};
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  const response = await fetch('/seasons', options);
  const responseData = await response.json();
  
  return responseData;
}
function generate_l3(player_data, season, which_player, key, stats){
  
  let l3 = document.createElement('div');
  let default_stats_gk = ['appearences', 'saves', 'cleansheets', 'insideboxsaves'];
  let default_stats = ['appearences', 'goals', 'assists', 'cleansheets'];
  l3.className = 'l3';
  l3.id = `player_${which_player}_l3`;


  if(stats === 'default'){
    for(let i=0; i < 4; i++){
      if(player_data.data.position_id === 1){
        const new_stat = create_stat(player_data, default_stats_gk[i], data_key, which_player, season);
        l3.appendChild(new_stat);
      }else {
        const new_stat = create_stat(player_data, default_stats[i], data_key, which_player, season);
        l3.appendChild(new_stat);
      }
    }
  }else {
    for(let i=0; i< stats.length; i++){
      if(player_data.data.position_id === 1){
        const new_stat = create_stat(player_data, stats[i], data_key, which_player, season);
        l3.appendChild(new_stat);
      } else {
        const new_stat = create_stat(player_data, stats[i], data_key, which_player, season);
        l3.appendChild(new_stat);
      }
    }
  }
  return l3
}

function l3_exist(){
  let l3 = document.getElementsByClassName('l3');
  if(l3.length < 0) {
    return true;
  } else {
    return false;
  }
}

function delete_l3(player){
  let player_card = document.getElementById(`player_card_${player}`);
  let l3 = document.getElementById(`player_${player}_l3`);
  player_card.removeChild(l3);
}

function create_stat(player_data, stat, stats_key, which_player, season){
  // 1# create div
  let stat_div = document.createElement('div');
  stat_div.className = 'stat';
  stat_div.id=`player${which_player}_${stat}`;

  let data_div = document.createElement('div');
  data_div.id = `player${which_player}_${stat}_data`
  data_div.className = `stat_data`

  // 2# get stats from player data
   let raw_stats_data = player_data.data.stats.data;
   let specific_stat = '';
   let display_text = '';
   let first_key = '';
   let second_key = '';

   for (key in raw_stats_data){
      if(parseInt(raw_stats_data[key].season_id) === parseInt(season)){
        specific_stat = raw_stats_data[key];

        
        if(stats_key[stat].obj === true){
          first_key = stats_key[stat].key;
          second_key = stats_key[stat].second_key;
          specific_stat = raw_stats_data[key][first_key][second_key];
        }else {
          first_key = stats_key[stat].key;
          specific_stat = raw_stats_data[key][first_key];
        }
          
      }
   }
   
  // 3# Get display text from key
    display_text = stats_key[stat].display_text;
   // 4# create the stat div
   let div_txt = document.createElement('p');
   let final_stat = document.createElement('p');
   final_stat.className = 'stat_data';
   final_stat.id = `data_for_player${which_player}_${stat}`
   final_stat.textContent = specific_stat;
   div_txt.textContent = display_text;

   data_div.appendChild(div_txt);
   data_div.appendChild(final_stat);
   stat_div.appendChild(data_div);

  return stat_div;
}

function generate_edit_stats_button(){
  let edit_stats = document.getElementById('edit_stats_div');
  let html = '<button data-edit_stats_modal="#edit_stats_modal" id="edit_stats" value="1">Edit Stats</button>';
  edit_stats.innerHTML = html;
  return edit_stats;
}

function hide_add_player_button(player){
  let button = document.getElementById(`add_player${player}`);
  button.className = 'hide_button';
}

function show_add_player_button(player){
  let button = document.getElementById(`add_player${player}`);
  button.className = "show_button";
}

function remove_card(player){
  let card_count = document.getElementsByClassName('player_card');
  let card = document.getElementById(`player_card_${player}`);
  card.remove();
  remove_player_stored_data(player);
  show_add_player_button(player);
  if(card_count.length ===0){
    document.getElementById('edit_stats').remove();
  }
}
// ######################################################################
// implement edit stats functionality

function populate_modal(){
  let edit_stats = document.getElementById(`stats_list`);
  let categories = ['Active','Dicipline','Defence','Passes','Crosses','Dribbles','Shots','Penalties'];

  categories.forEach(category =>{
    let category_html = create_category(category);
    edit_stats.appendChild(category_html);
  });

  //if(document.getElementById('stats_list').childNodes.length === 0){
    let defaults  = find_current_stats(1);
    defaults.forEach(stat => check_stat_box(stat));
    let stats_list_listeners = document.getElementsByClassName('stat_checkbox');
    
    for(let i=0; i< stats_list_listeners.length; i++){
      stats_list_listeners[i].addEventListener('change', (e)=>{
        // #1 find which stats are checked
        let current_stats = find_checked_stats();

        //#2 Delete any l3's on page
        let l3_stats = document.getElementsByClassName('l3');
        let player_cards = document.getElementsByClassName('player_card')
        
        if(player_cards.length > 1){
         delete_l3("1");
         delete_l3("2");
        }else {
          delete_l3("1");
        }

        //#3 generate new l3's on pagE
        for(let i=0; i< player_cards.length; i++){
          let div = generate_l3(get_data_from_store(i+1, document.getElementById(`player${i+1}_season_menu`).value), document.getElementById(`player${i+1}_season_menu`).value, i+1, key, current_stats);
          player_cards[i].appendChild(div);
          add_lines(i+1);
          if(document.getElementsByClassName('player_card').length ===2){
            style_lines(find_current_stats(1));
          }
        }
    
      })
  //  }
  }
}

function create_stat_checkbox(stat_id, stat_display, stat_class){
  let div_for_stat = document.createElement('div');
  div_for_stat.id = stat_id;
  div_for_stat.class = 'edit_stats_div'

  let checkbox_html = `<input type="checkbox" id="${stat_id}_checkbox" class="${stat_class}">`
  div_for_stat.innerHTML = checkbox_html;
  
  let label_html = `<label for="${stat_id}" id="label_for_${stat_id}" class="stat_label">${stat_display}</label>`
  div_for_stat.innerHTML += label_html;
  
  return div_for_stat

}

function create_category(category){
  let category_div = document.createElement('div');
  category_div.className = 'edit_stat_category';
  category_div.id = `category_${category.toLowerCase()}`;

  let title_element = document.createElement('h2');
  title_element.textContent = category;
  category_div.appendChild(title_element);

  for(stat in data_key){
    let stat_div = '';
    if(data_key[stat].category === category.toLowerCase()){
      if(data_key[stat].obj === false){
        stat_div = create_stat_checkbox(data_key[stat].key, data_key[stat].display_text, "stat_checkbox");
      } else if (data_key[stat].obj === true) {
        stat_div = create_stat_checkbox(`${data_key[stat].key}${data_key[stat].second_key}`, data_key[stat].display_text, "stat_checkbox");
      }
      category_div.appendChild(stat_div)
    }
  }
  return category_div
}

function find_current_stats(player){
  let p1 = document.getElementById(`player_${player}_l3`).childNodes;
  let current_stats = [];

  for(let i=0; i<p1.length; i++){
    current_stats[i] = p1[i].id.replace(`player${player}_`,"")
  }

  return current_stats;
}

function check_stat_box(stat){
  let checkbox = document.getElementById(`${stat}_checkbox`);
  checkbox.checked = true;

}

function find_checked_stats(){
  let all_checkboxes = document.getElementsByClassName('stat_checkbox');
  let checked_checkboxes = [];

  for(let i=0; i< all_checkboxes.length; i++){
    if(all_checkboxes[i].checked === true){
      checked_checkboxes.push(all_checkboxes[i].id.replace("_checkbox",""));
    }
  }
  return checked_checkboxes
}

function add_lines(player){
  let current_stats = find_current_stats(1);

  for(let i=0; i< current_stats.length; i++){
    let line = create_line(player, current_stats[i]);
    document.getElementById(`player${player}_${current_stats[i]}`).appendChild(line);
  }
}

function create_line(player, stat){
  let line = document.createElement('hr');
  line.id = `player${player}_${stat}_comparison_line`;
  line.className = 'comparison_line'

  return line;
}

function style_lines(current_stats){

  for(let i=0; i< current_stats.length; i++){
    let p1 = document.getElementById(`data_for_player1_${current_stats[i]}`);
    let p2 = document.getElementById(`data_for_player2_${current_stats[i]}`);
    let direction = data_key[current_stats[i]].direction;
    let winner;
    if(p1 !== null && p2 !== null){
      winner = find_winner(direction, p1.textContent, p2.textContent);
    }

    if(winner === "p1"){
      style_winner(1, current_stats[i], [p1.textContent, p2.textContent], direction);
      style_loser(2, current_stats[i], [p1.textContent, p2.textContent], direction);
    } else if(winner ==="p2"){
      style_winner(2, current_stats[i], [p1.textContent, p2.textContent], direction);
      style_loser(1, current_stats[i], [p1.textContent, p2.textContent], direction);
    } else if (winner === "none"){
      style_draw(current_stats[i]);
    }
  }
}

function find_winner(direction, p1, p2){
  if(direction === 'm'){
    if(parseInt(p1) < parseInt(p2)){
      return "p2"
    } else if (parseInt(p1) === parseInt(p2)){
      return "none"
    } else {
      return "p1"
    }
  } else if (direction === "l") {
    if(parseInt(p1) > parseInt(p2)){
      return "p2"
    } else if (parseInt(p1) === parseInt(p2)){
      return "none"
    } else {
      return "p1"
    }
  }
}

function style_winner(winner, stat, data, direction){
  let element = document.getElementById(`player${winner}_${stat}_comparison_line`);
  element.style.borderColor = "#66ff00";
  if(direction==="l"){
    if(parseInt(winner)===1){
      element.style.width = `${100*(data[0]/data[1])}%`
    } else if (parseInt(winner)===2){
      element.style.width = `${100*(data[1]/data[0])}%`
    }
  } else if(direction==="m"){
    element.style.width = '100%';
  }
}

function style_loser(loser, stat, data, direction){
  let element = document.getElementById(`player${loser}_${stat}_comparison_line`);

  element.style.borderColor = "red";
  if(direction === "m"){
    if(parseInt(loser) === 1){
      element.style.width = `${100 * (data[0]/data[1])}%`
    } else if(parseInt(loser) === 2) {
      element.style.width = `${100 * (data[1]/data[0])}%`
    }
  } else if(direction==="l"){
    element.style.width = '100%';
  }
}

function style_draw(stat){
  let p1 = document.getElementById(`player1_${stat}_comparison_line`);
  let p2 =document.getElementById(`player2_${stat}_comparison_line`); 

  p1.style.width = '100%';
  p1.style.borderColor = 'orange';

  p2.style.width = '100%'
  p2.style.borderColor = 'orange';
}

function remove_nulls(){
  let stat_checkboxes = document.getElementsByClassName('stat_checkbox');
  let players = document.getElementsByClassName('player_card');

  for(let i=0; i < stat_checkboxes.length; i++){

    let stat = stat_checkboxes[i].id.replace(`_checkbox`, "");
    for(let j=1; j <= players.length; j++){
      let season = document.getElementById(`player${j}_season_menu`).value;
      let player_data = get_data_from_store(j, season);
   
      player_data.data.stats.data.forEach(comp => {
        
        if(parseInt(comp.season_id) === parseInt(season)){
          if(data_key[stat].obj===true){
            if(comp[data_key[stat].key][data_key[stat].second_key]===null){
              disable_stat(stat,j);
              j++
            }
           
          } else {
            if(comp[data_key[stat].key]===null){
              disable_stat(stat,j);
              j++
            }
            
          }
        }
      });
    }
  }
}

function disable_stat(stat, player){
  let checkbox = document.getElementById(`${stat}_checkbox`);
  let label = document.getElementById(`label_for_${stat}`);
  checkbox.checked = false;
  checkbox.disabled = true;
  label.className = 'disabled';
}

function enable_stats(){
  let checkbox = document.getElementsByClassName(`stat_checkbox`);

  for(let i=0; i < checkbox.length; i++){
    let label = document.getElementById(`label_for_${checkbox[i].id.replace("_checkbox","")}`);
    label.className = '';
    checkbox[i].disabled = false;
  };
}

function regenerate_all_l3(){

  // #1 find players
  let l3s = document.getElementsByClassName('l3');
  let initial_player_count = l3s.length;
  // #2 remove previous l3's
  for(let i=1; i<= initial_player_count; i++){
    delete_l3(i);
  }
  // #3 Create list of stats for new l3 (not containing null values)
  enable_stats();
  remove_nulls();
  let new_stats_list = find_checked_stats();
  
  // #4 generate and append new l3's
  for(let i=1; i<= initial_player_count; i++){
    let new_l3 = generate_l3(get_data_from_store(i, document.getElementById(`player${i}_season_menu`).value), document.getElementById(`player${i}_season_menu`).value, i, data_key, new_stats_list);
    document.getElementById(`player_card_${i}`).appendChild(new_l3);
    add_lines(i);
    if(i===2){
      if(document.getElementById('player_1_l3')){
        style_lines(find_current_stats(1));
      } else {
        style_lines(find_current_stats(2));
      }
    }
  }
}
