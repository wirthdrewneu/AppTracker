import React, { useState, useEffect } from 'react';
// import * as posts from "../jobposts.json";
import { getApplications } from '../services/applicationsService';
import Pagination from './common/pagination';
import { paginate } from '../services/paginationService';
import Filters from './common/filtering';
import {getStages} from '../services/stagesService';
import HistoryTable from './HistoryTable';

const applyFilters = (selectedStage, tableData) => {
  return selectedStage && selectedStage !== "All Stages"
    ? tableData.filter(p => p.Stage === selectedStage)
    : tableData;
}

export default function ApplicationsTable() {
  //initialize tableData as empty when working with backend, and process data in useEffect()
  const [tableData, setTableData] = useState(getApplications());
  const [pageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [stages] = useState([{stage: 'All Stages'}, ...getStages()]);
  const [selectedStage, setSelectedStage] = useState("All Stages");
  
  const [filtered, setFiltered] = useState(applyFilters(selectedStage, tableData));
  //apply filters before pagination
  const [posts, setPosts] = useState(paginate(filtered, currentPage, pageSize));
  console.dir(posts);
  useEffect(() => {
    setPosts(paginate(filtered, currentPage, pageSize));
  }, [filtered, currentPage, pageSize]);

  useEffect(() => {
    setFiltered(applyFilters(selectedStage, tableData))
  }, [tableData, selectedStage]);
    


  const handleDelete = (post) => {
    console.log(post);
    //Send a delete request to the backend and update on response
    //for now in the front-end
    const newPosts = tableData.filter(p => p._id !== post._id);
    setTableData(newPosts);
  }

  const handleEdit = (post) => {
    console.log('Edit this post:', post);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const handleStageSelect = (selected) => {
    setSelectedStage(selected.stage);
    setCurrentPage(1);
  }



  return (
    <div>
        <div class="row">
          <div class="col-2">
            <Filters 
              items={stages} 
              textProperty="stage"
              valueProperty="id"
              onItemSelect={handleStageSelect}
              selectedItem={selectedStage}
            />
          </div>
        {
          (filtered.length !== 0) 
            ? 
              <div class="col">
                <p>Showing {filtered.length} applications from the database</p>
                <HistoryTable 
                  posts={posts}
                  onDelete = {handleDelete}
                  onEdit = {handleEdit}
                />
                <Pagination 
                  itemsCount={filtered.length}
                  pageSize={pageSize}
                  onPageChange={handlePageChange}
                  currentPage={currentPage}
                />
              </div> 
            
          : <p>There are no applications in the database</p>
      }
      </div>  
    </div>
  );
}