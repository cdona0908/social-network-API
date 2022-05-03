const {Thought, User} = require('../models');

const thoughtController = {

    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
        .populate({path: 'reactions', select: '-__v'})
        .select('-__v')
        .sort({_id: -1})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },
    // get a single thought by id
    getThoughtById({params}, res){
        Thought.findOne({_id: params.id})
        .populate({path: 'reactions',select: '-__v'})              
        .select('-__v')        
        .then(dbThoughtData => {
            if(!dbThoughtData){
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },
    //add a thought
    addThought({body}, res){
        Thought.create(body)
        .then(({_id})=> {
            return User.findOneAndUpdate(
                {_id: body.userId},
                {$push: {thoughts: _id}},
                {new: true}
            );
        })
        .then(dbUserData => {
            console.log(dbUserData);
            if (!dbUserData) {
                res.status(404).json({ message: 'No User found with this id!' });
                return;
              }
              res.json(dbUserData);
            })
            .catch(err => res.json(err));        
    },

    // update thought by Id
    updateThought({params, body}, res){
        Thought.findOneAndUpdate({_id: params.id}, body,{new: true, runValidators: true})
        .populate({path: 'reactions', select: '-__v'})
        .select('-__v')
        .then(dbThoughtData => {
            if(!dbThoughtData){
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    },

    //remove thought by Id
    deleteThought({params}, res){
        Thought.findOneAndDelete({_id: params.id})
        .then(deletedThought => {
            if(!deletedThought){
                res.status(404).json({ message: 'No thought with this id!' });
                return;
            }
            res.json(deletedThought);
        })
        .catch(err => res.json(err));
    },

    //add reaction to thought
    addReaction({params, body}, res){
        Thought.findOneAndUpdate(
            {_id: params.thoughtId},
            {$push: {reactions: body}},
            {new: true}
        )
        .populate({path: 'reactions', select: '-__v'})
        .select('-__v')
        .then(dbThoughtData => {
            if(!dbThoughtData ){
                res.status(404).json({ message: 'No thought with this id!' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    },
    //remove reaction from thought
    removeReaction({params}, res){
        Thought.findOneAndUpdate(
            {_id: params.thoughtId},
            {$pull: { reactions: { reactionId: params.reactionId } } },
            { new: true }
        )
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({message: 'No thoughts with this id!'});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err))
    }

};

module.exports = thoughtController;