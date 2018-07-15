import CommandData from './command';

type Command<In extends CommandData, Out> = (data: In) => Out;

export default interface BaseHandler
{
	handle:Command<CommandData,any>;
}