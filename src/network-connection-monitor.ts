// https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NetworkConnectionMonitorConfig extends TerraformMetaArguments {
  readonly autoStart?: boolean;
  readonly intervalInSeconds?: number;
  readonly location: string;
  readonly name: string;
  readonly networkWatcherName: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** destination block */
  readonly destination: NetworkConnectionMonitorDestination[];
  /** source block */
  readonly source: NetworkConnectionMonitorSource[];
  /** timeouts block */
  readonly timeouts?: NetworkConnectionMonitorTimeouts;
}
export interface NetworkConnectionMonitorDestination {
  readonly address?: string;
  readonly port: number;
  readonly virtualMachineId?: string;
}
export interface NetworkConnectionMonitorSource {
  readonly port?: number;
  readonly virtualMachineId: string;
}
export interface NetworkConnectionMonitorTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class NetworkConnectionMonitor extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetworkConnectionMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_connection_monitor',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoStart = config.autoStart;
    this._intervalInSeconds = config.intervalInSeconds;
    this._location = config.location;
    this._name = config.name;
    this._networkWatcherName = config.networkWatcherName;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._destination = config.destination;
    this._source = config.source;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_start - computed: false, optional: true, required: false
  private _autoStart?: boolean;
  public get autoStart() {
    return this.getBooleanAttribute('auto_start');
  }
  public set autoStart(value: boolean ) {
    this._autoStart = value;
  }
  public resetAutoStart() {
    this._autoStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStartInput() {
    return this._autoStart
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval_in_seconds - computed: false, optional: true, required: false
  private _intervalInSeconds?: number;
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }
  public set intervalInSeconds(value: number ) {
    this._intervalInSeconds = value;
  }
  public resetIntervalInSeconds() {
    this._intervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInSecondsInput() {
    return this._intervalInSeconds
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // network_watcher_name - computed: false, optional: false, required: true
  private _networkWatcherName: string;
  public get networkWatcherName() {
    return this.getStringAttribute('network_watcher_name');
  }
  public set networkWatcherName(value: string) {
    this._networkWatcherName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkWatcherNameInput() {
    return this._networkWatcherName
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // destination - computed: false, optional: false, required: true
  private _destination: NetworkConnectionMonitorDestination[];
  public get destination() {
    return this.interpolationForAttribute('destination') as any;
  }
  public set destination(value: NetworkConnectionMonitorDestination[]) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination
  }

  // source - computed: false, optional: false, required: true
  private _source: NetworkConnectionMonitorSource[];
  public get source() {
    return this.interpolationForAttribute('source') as any;
  }
  public set source(value: NetworkConnectionMonitorSource[]) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkConnectionMonitorTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: NetworkConnectionMonitorTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_start: this._autoStart,
      interval_in_seconds: this._intervalInSeconds,
      location: this._location,
      name: this._name,
      network_watcher_name: this._networkWatcherName,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      destination: this._destination,
      source: this._source,
      timeouts: this._timeouts,
    };
  }
}
