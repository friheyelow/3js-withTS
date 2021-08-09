import * as THREE from 'three';
import * as CANNON from 'cannon';


export class World
{
  public renderer: THREE.WebGLRenderer;
  public camera: THREE.PerspectiveCamera;
  // public composer: any;
  public stats: Stats; //?
  public graphicsWorld: THREE.Scene;
  public sky: Sky; // ?
  public physicsWorld: CANNON.World;
  // public parallelPairs: any[];
  // public physicsFrameRate: number;
  // public physicsFrameTime: number;
  // public physicsMaxPrediction: number;
  public clock: THREE.Clock;
	// public renderDelta: number;
	// public logicDelta: number;
	// public requestDelta: number;
	// public sinceLastFrame: number;
	// public justRendered: boolean;
	public params: any;
	// public inputManager: InputManager;
	public cameraOperator: CameraOperator;
	// public timeScaleTarget: number = 1;
	public console: InfoStack;
	public cannonDebugRenderer: CannonDebugRenderer;
	public scenarios: Scenario[] = [];
	public characters: Character[] = [];
	public vehicles: Vehicle[] = [];
	public paths: Path[] = [];
	public scenarioGUIFolder: any;
	public updatables: IUpdatable[] = [];

	private lastScenarioID: string;


}