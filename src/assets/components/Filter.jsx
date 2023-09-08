import React from 'react';

const FilterComponent = ({ sort_by, order, topic, handleSortByChange, handleOrderChange, handleTopicChange }) => {
  return (
      <div id="filter">
      <h3>Sort</h3>
      <select value={sort_by} onChange={handleSortByChange}>
        <option value="">Select a criteria</option>
        <option value="author">Author</option>
        <option value="title">Title</option>
        <option value="created_at">Created At</option>
        <option value="votes">Votes</option>
      </select>
      <p>selected: {sort_by}</p>
      <h3>Order</h3>
      <select value={order} onChange={handleOrderChange}>
        <option value="">Select order</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <p>selected: {order}</p>
      <h3>Topics</h3>
      <select value={topic} onChange={handleTopicChange}>
        <option value="">Select topic</option>
        <option value="football">Football</option>
        <option value="cooking">Cusine</option>
        <option value="coding">Coding</option>

      </select>
      <p>selected: {topic}</p>
    </div>
  );
};

export default FilterComponent;