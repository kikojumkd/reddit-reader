import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import { fetchRequest } from "../actions/creators";
import { IAppState } from "../reducers/rootReducer";

type PFS = ReturnType<typeof mapStateToProps>;
type PFD = typeof mapDispatchToProps;

interface IProps extends PFS, PFD {
  subreddit: string;
  uri: string;
}

class Subreddit extends Component<IProps> {
  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps: IProps) {
    // to lowercase?
    if (this.props.subreddit !== prevProps.subreddit) {
      this.loadData();
    }
  }

  loadData = () => {
    const { uri, fetchPosts } = this.props;
    fetchPosts({ uri });
  };

  render() {
    const { subreddit, posts, isLoading } = this.props;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <h1>{`r/${subreddit}`}</h1>
        {posts.map((post, i) => (
          <Post key={post.id} post={post} delay={(i + 1) * 50} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ data }: IAppState) => ({
  posts: data.data.posts,
  isLoading: data.isLoading,
});

const mapDispatchToProps = {
  fetchPosts: fetchRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subreddit);
